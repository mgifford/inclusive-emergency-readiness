#!/usr/bin/env node

/**
 * Compare Light and Dark Mode Results
 * 
 * Analyzes accessibility issues across both modes and identifies:
 * 1. Issues that appear in BOTH modes (need universal color fix)
 * 2. Issues that appear in only ONE mode (need mode-specific fix)
 * 
 * Outputs a comprehensive report with recommendations.
 */

const fs = require('fs').promises;
const path = require('path');

async function compareResults() {
  console.log('🔍 Comparing Light and Dark Mode Results...\n');

  try {
    // Load results from both modes
    const lightData = await fs.readFile(
      path.join(__dirname, '..', '.a11y-results', 'light-mode.json'),
      'utf8'
    );
    const darkData = await fs.readFile(
      path.join(__dirname, '..', '.a11y-results', 'dark-mode.json'),
      'utf8'
    );

    const lightResults = JSON.parse(lightData);
    const darkResults = JSON.parse(darkData);

    // Build maps of issues by aggregateId
    const lightIssueMap = new Map();
    const darkIssueMap = new Map();

    // Process light mode issues
    lightResults.forEach(urlResult => {
      urlResult.issues.forEach(issue => {
        if (!lightIssueMap.has(issue.aggregateId)) {
          lightIssueMap.set(issue.aggregateId, []);
        }
        lightIssueMap.get(issue.aggregateId).push(issue);
      });
    });

    // Process dark mode issues
    darkResults.forEach(urlResult => {
      urlResult.issues.forEach(issue => {
        if (!darkIssueMap.has(issue.aggregateId)) {
          darkIssueMap.set(issue.aggregateId, []);
        }
        darkIssueMap.get(issue.aggregateId).push(issue);
      });
    });

    // Find issues in both modes
    const bothModes = [];
    const lightOnly = [];
    const darkOnly = [];

    // Check which issues appear in both modes
    lightIssueMap.forEach((issues, aggregateId) => {
      if (darkIssueMap.has(aggregateId)) {
        bothModes.push({
          aggregateId: aggregateId,
          lightIssue: issues[0],
          darkIssue: darkIssueMap.get(aggregateId)[0],
          recommendation: 'Find a universal color that works in both light and dark modes'
        });
      } else {
        lightOnly.push({
          aggregateId: aggregateId,
          issue: issues[0],
          recommendation: 'Fix color specifically for light mode'
        });
      }
    });

    // Find dark-only issues
    darkIssueMap.forEach((issues, aggregateId) => {
      if (!lightIssueMap.has(aggregateId)) {
        darkOnly.push({
          aggregateId: aggregateId,
          issue: issues[0],
          recommendation: 'Fix color specifically for dark mode'
        });
      }
    });

    // Generate report
    const report = {
      summary: {
        totalLightIssues: Array.from(lightIssueMap.keys()).length,
        totalDarkIssues: Array.from(darkIssueMap.keys()).length,
        issuesInBothModes: bothModes.length,
        issuesInLightOnly: lightOnly.length,
        issuesInDarkOnly: darkOnly.length
      },
      bothModes: bothModes,
      lightOnly: lightOnly,
      darkOnly: darkOnly,
      generatedAt: new Date().toISOString()
    };

    // Save JSON report
    await fs.writeFile(
      path.join(__dirname, '..', '.a11y-results', 'comparison.json'),
      JSON.stringify(report, null, 2)
    );

    // Generate human-readable markdown report
    const markdown = generateMarkdownReport(report);
    await fs.writeFile(
      path.join(__dirname, '..', '.a11y-results', 'comparison.md'),
      markdown
    );

    // Print summary
    console.log('📊 Comparison Summary:');
    console.log(`   Light mode issues: ${report.summary.totalLightIssues}`);
    console.log(`   Dark mode issues: ${report.summary.totalDarkIssues}`);
    console.log(`   Issues in BOTH modes: ${report.summary.issuesInBothModes} ⚠️`);
    console.log(`   Issues in light mode only: ${report.summary.issuesInLightOnly}`);
    console.log(`   Issues in dark mode only: ${report.summary.issuesInDarkOnly}`);
    console.log('\n✅ Comparison complete!');
    console.log('   JSON: .a11y-results/comparison.json');
    console.log('   Markdown: .a11y-results/comparison.md');

    return report;
  } catch (error) {
    console.error('❌ Error comparing results:', error.message);
    throw error;
  }
}

function generateMarkdownReport(report) {
  let md = `# Accessibility Testing: Light/Dark Mode Comparison\n\n`;
  md += `**Generated:** ${report.generatedAt}\n\n`;
  md += `## Summary\n\n`;
  md += `| Metric | Count |\n`;
  md += `|--------|-------|\n`;
  md += `| Light mode unique issues | ${report.summary.totalLightIssues} |\n`;
  md += `| Dark mode unique issues | ${report.summary.totalDarkIssues} |\n`;
  md += `| **Issues in BOTH modes** | **${report.summary.issuesInBothModes}** |\n`;
  md += `| Issues in light mode only | ${report.summary.issuesInLightOnly} |\n`;
  md += `| Issues in dark mode only | ${report.summary.issuesInDarkOnly} |\n\n`;

  md += `## Priority: Issues in Both Modes 🚨\n\n`;
  md += `These issues appear in both light and dark modes. **They need a universal color solution** that works in both contexts.\n\n`;
  
  if (report.bothModes.length === 0) {
    md += `✅ No issues found in both modes!\n\n`;
  } else {
    report.bothModes.forEach((item, index) => {
      const issue = item.lightIssue;
      md += `### ${index + 1}. ${issue.code}\n\n`;
      md += `**URL:** ${issue.url}\n\n`;
      md += `**Element:** \`${issue.selector}\`\n\n`;
      md += `**Issue:** ${issue.message}\n\n`;
      md += `**Context (Light):** ${issue.context || 'N/A'}\n\n`;
      md += `**Recommendation:** ${item.recommendation}\n\n`;
      md += `**Why this matters:** This same pattern fails in both light and dark modes, suggesting the color choice is fundamentally problematic. Choose a color with sufficient contrast in both contexts, or use CSS custom properties to define mode-specific values.\n\n`;
      md += `---\n\n`;
    });
  }

  md += `## Light Mode Only Issues 🌞\n\n`;
  md += `These issues only appear in light mode. Fix them with light-mode-specific colors.\n\n`;
  
  if (report.lightOnly.length === 0) {
    md += `✅ No light-mode-only issues!\n\n`;
  } else {
    report.lightOnly.slice(0, 10).forEach((item, index) => {
      const issue = item.issue;
      md += `### ${index + 1}. ${issue.code}\n\n`;
      md += `**URL:** ${issue.url}\n\n`;
      md += `**Element:** \`${issue.selector}\`\n\n`;
      md += `**Issue:** ${issue.message}\n\n`;
      md += `**Recommendation:** ${item.recommendation}\n\n`;
      md += `---\n\n`;
    });
    
    if (report.lightOnly.length > 10) {
      md += `*... and ${report.lightOnly.length - 10} more light-mode-only issues. See comparison.json for full details.*\n\n`;
    }
  }

  md += `## Dark Mode Only Issues 🌙\n\n`;
  md += `These issues only appear in dark mode. Fix them with dark-mode-specific colors within the \`@media (prefers-color-scheme: dark)\` block.\n\n`;
  
  if (report.darkOnly.length === 0) {
    md += `✅ No dark-mode-only issues!\n\n`;
  } else {
    report.darkOnly.slice(0, 10).forEach((item, index) => {
      const issue = item.issue;
      md += `### ${index + 1}. ${issue.code}\n\n`;
      md += `**URL:** ${issue.url}\n\n`;
      md += `**Element:** \`${issue.selector}\`\n\n`;
      md += `**Issue:** ${issue.message}\n\n`;
      md += `**Recommendation:** ${item.recommendation}\n\n`;
      md += `---\n\n`;
    });
    
    if (report.darkOnly.length > 10) {
      md += `*... and ${report.darkOnly.length - 10} more dark-mode-only issues. See comparison.json for full details.*\n\n`;
    }
  }

  md += `## Understanding the Results\n\n`;
  md += `### Unique Identifiers\n\n`;
  md += `Each issue has two types of identifiers:\n\n`;
  md += `1. **Unique ID:** \`URL + XPath + Axe Rule + User Preference (light/dark)\`\n`;
  md += `   - This identifies a specific instance of an issue in a specific mode\n`;
  md += `   - Example: \`https://example.com/::#main::color-contrast::light\`\n\n`;
  md += `2. **Aggregate ID:** \`URL + XPath + Axe Rule\`\n`;
  md += `   - This identifies the same pattern across modes\n`;
  md += `   - Example: \`https://example.com/::#main::color-contrast\`\n\n`;
  md += `### Recommendations\n\n`;
  md += `- **Issues in both modes:** These are the highest priority. Find a universal color that works everywhere, or use CSS variables with mode-specific values.\n`;
  md += `- **Mode-specific issues:** These can be fixed with targeted CSS in the appropriate media query.\n`;
  md += `- **Consider using CSS custom properties:** Define colors once and override them in dark mode.\n\n`;
  md += `### Example Fix\n\n`;
  md += `\`\`\`css\n`;
  md += `/* Define base colors */\n`;
  md += `:root {\n`;
  md += `  --text-color: #1a1a1a;  /* Dark text for light backgrounds */\n`;
  md += `  --bg-color: #ffffff;\n`;
  md += `}\n\n`;
  md += `/* Override for dark mode */\n`;
  md += `@media (prefers-color-scheme: dark) {\n`;
  md += `  :root {\n`;
  md += `    --text-color: #e5e5e5;  /* Light text for dark backgrounds */\n`;
  md += `    --bg-color: #1a1a1a;\n`;
  md += `  }\n`;
  md += `}\n\n`;
  md += `/* Use the variables */\n`;
  md += `body {\n`;
  md += `  color: var(--text-color);\n`;
  md += `  background-color: var(--bg-color);\n`;
  md += `}\n`;
  md += `\`\`\`\n\n`;

  return md;
}

// Run if called directly
if (require.main === module) {
  compareResults()
    .then(report => {
      process.exit(report.summary.issuesInBothModes > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = compareResults;

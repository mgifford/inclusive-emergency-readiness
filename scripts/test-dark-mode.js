#!/usr/bin/env node

/**
 * Dark Mode Accessibility Test
 * 
 * Tests the site with dark color scheme (prefers-color-scheme: dark).
 * Outputs results in JSON format for comparison.
 */

const pa11y = require('pa11y');
const fs = require('fs').promises;
const path = require('path');

// Load URLs from pa11y config
const config = require('../.pa11yci.json');

async function testDarkMode() {
  console.log('🌙 Testing in Dark Mode...\n');

  const results = [];
  const errors = [];

  for (const url of config.urls) {
    console.log(`Testing: ${url}`);
    
    try {
      const result = await pa11y(url, {
        runners: ['axe'],
        standard: 'WCAG2AA',
        timeout: 30000,
        wait: 1000,
        chromeLaunchConfig: {
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
          ]
        },
        // Force dark mode using Chrome DevTools Protocol
        browser: undefined,
        beforeScript: async (page) => {
          // Emulate dark color scheme preference
          await page.emulateMediaFeatures([
            { name: 'prefers-color-scheme', value: 'dark' }
          ]);
        },
        screenCapture: path.join(__dirname, '..', '.a11y-results', `dark-${encodeURIComponent(url)}.png`)
      });

      // Add mode and URL to each issue
      const processedIssues = result.issues.map(issue => ({
        ...issue,
        url: url,
        mode: 'dark',
        uniqueId: `${url}::${issue.selector}::${issue.code}::dark`,
        aggregateId: `${url}::${issue.selector}::${issue.code}`
      }));

      results.push({
        url: url,
        mode: 'dark',
        issues: processedIssues,
        totalIssues: processedIssues.length
      });

      console.log(`  ✓ Found ${processedIssues.length} issues\n`);
    } catch (error) {
      console.error(`  ✗ Error testing ${url}:`, error.message);
      errors.push({ url, error: error.message });
    }
  }

  // Save results
  const resultsDir = path.join(__dirname, '..', '.a11y-results');
  await fs.mkdir(resultsDir, { recursive: true });
  
  await fs.writeFile(
    path.join(resultsDir, 'dark-mode.json'),
    JSON.stringify(results, null, 2)
  );

  console.log(`\n✅ Dark mode testing complete!`);
  console.log(`   Results saved to .a11y-results/dark-mode.json`);
  
  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} URL(s) had errors:`);
    errors.forEach(e => console.log(`   - ${e.url}: ${e.error}`));
  }

  // Return summary
  const totalIssues = results.reduce((sum, r) => sum + r.totalIssues, 0);
  return {
    mode: 'dark',
    totalUrls: config.urls.length,
    successfulUrls: results.length,
    failedUrls: errors.length,
    totalIssues: totalIssues,
    results: results,
    errors: errors
  };
}

// Run if called directly
if (require.main === module) {
  testDarkMode()
    .then(summary => {
      console.log(`\n📊 Summary:`);
      console.log(`   URLs tested: ${summary.successfulUrls}/${summary.totalUrls}`);
      console.log(`   Total issues: ${summary.totalIssues}`);
      
      process.exit(summary.totalIssues > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = testDarkMode;

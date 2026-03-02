#!/usr/bin/env node

const pa11y = require('pa11y');
const fs = require('fs').promises;
const path = require('path');

// Test local URLs
const urls = [
  'http://localhost:4000/inclusive-emergency-readiness/',
  'http://localhost:4000/inclusive-emergency-readiness/framework/resources/'
];

async function testDarkMode() {
  console.log('🌙 Testing in Dark Mode (Local)...\n');

  const results = [];
  const errors = [];

  for (const url of urls) {
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
        beforeScript: async (page) => {
          await page.emulateMediaFeatures([
            { name: 'prefers-color-scheme', value: 'dark' }
          ]);
        }
      });

      const processedIssues = result.issues.map(issue => ({
        ...issue,
        url: url,
        mode: 'dark'
      }));

      results.push({
        url: url,
        mode: 'dark',
        issues: processedIssues,
        totalIssues: processedIssues.length
      });

      console.log(`  ✓ Found ${processedIssues.length} issues`);
      
      // Show first few color-contrast issues
      const contrastIssues = processedIssues.filter(i => i.code === 'color-contrast');
      if (contrastIssues.length > 0) {
        console.log(`    → ${contrastIssues.length} color contrast issues`);
        contrastIssues.slice(0, 3).forEach(issue => {
          console.log(`      • ${issue.selector}: ${issue.message.substring(0, 100)}...`);
        });
      }
      console.log();
    } catch (error) {
      console.error(`  ✗ Error testing ${url}:`, error.message);
      errors.push({ url, error: error.message });
    }
  }

  const totalIssues = results.reduce((sum, r) => sum + r.totalIssues, 0);
  const totalContrastIssues = results.reduce((sum, r) => 
    sum + r.issues.filter(i => i.code === 'color-contrast').length, 0);
    
  console.log(`\n📊 Summary:`);
  console.log(`   URLs tested: ${results.length}/${urls.length}`);
  console.log(`   Total issues: ${totalIssues}`);
  console.log(`   Color contrast issues: ${totalContrastIssues}`);
  
  return totalIssues;
}

testDarkMode()
  .then(issues => process.exit(issues > 0 ? 1 : 0))
  .catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

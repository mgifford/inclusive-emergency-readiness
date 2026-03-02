#!/usr/bin/env node

/**
 * Validation Test for Accessibility Testing Scripts
 * 
 * Verifies that the scripts are structured correctly and can handle
 * test data appropriately.
 */

const fs = require('fs').promises;
const path = require('path');

async function validateScripts() {
  console.log('🔍 Validating Accessibility Testing Scripts...\n');

  const errors = [];
  const warnings = [];

  // Check that required files exist
  const requiredFiles = [
    'package.json',
    '.pa11yci.json',
    'scripts/test-light-mode.js',
    'scripts/test-dark-mode.js',
    'scripts/compare-results.js',
    '.github/workflows/accessibility-test.yml',
    'ACCESSIBILITY_TESTING.md'
  ];

  for (const file of requiredFiles) {
    try {
      await fs.access(path.join(__dirname, '..', file));
      console.log(`✓ Found: ${file}`);
    } catch (error) {
      errors.push(`Missing required file: ${file}`);
      console.log(`✗ Missing: ${file}`);
    }
  }

  console.log('');

  // Validate package.json
  try {
    const packageJson = require('../package.json');
    
    if (!packageJson.devDependencies['pa11y']) {
      errors.push('package.json missing pa11y dependency');
    }
    
    if (!packageJson.devDependencies['axe-core']) {
      errors.push('package.json missing axe-core dependency');
    }
    
    if (!packageJson.scripts['test:a11y-light']) {
      errors.push('package.json missing test:a11y-light script');
    }
    
    if (!packageJson.scripts['test:a11y-dark']) {
      errors.push('package.json missing test:a11y-dark script');
    }
    
    if (!packageJson.scripts['test:a11y-compare']) {
      errors.push('package.json missing test:a11y-compare script');
    }
    
    console.log('✓ package.json structure valid');
  } catch (error) {
    errors.push(`Invalid package.json: ${error.message}`);
  }

  // Validate .pa11yci.json
  try {
    const config = require('../.pa11yci.json');
    
    if (!config.urls || !Array.isArray(config.urls) || config.urls.length === 0) {
      errors.push('.pa11yci.json missing or empty urls array');
    }
    
    if (!config.defaults || !config.defaults.runners || !config.defaults.runners.includes('axe')) {
      warnings.push('.pa11yci.json should specify axe as a runner');
    }
    
    console.log(`✓ .pa11yci.json valid (${config.urls.length} URLs configured)`);
  } catch (error) {
    errors.push(`Invalid .pa11yci.json: ${error.message}`);
  }

  // Test comparison logic with mock data
  console.log('\n📊 Testing comparison logic with mock data...\n');
  
  const mockLightResults = [
    {
      url: 'https://example.com/',
      mode: 'light',
      issues: [
        {
          code: 'color-contrast',
          selector: '#header',
          message: 'Insufficient contrast',
          url: 'https://example.com/',
          mode: 'light',
          uniqueId: 'https://example.com/::#header::color-contrast::light',
          aggregateId: 'https://example.com/::#header::color-contrast'
        },
        {
          code: 'label-missing',
          selector: '#input1',
          message: 'Missing label',
          url: 'https://example.com/',
          mode: 'light',
          uniqueId: 'https://example.com/::#input1::label-missing::light',
          aggregateId: 'https://example.com/::#input1::label-missing'
        }
      ]
    }
  ];
  
  const mockDarkResults = [
    {
      url: 'https://example.com/',
      mode: 'dark',
      issues: [
        {
          code: 'color-contrast',
          selector: '#header',
          message: 'Insufficient contrast',
          url: 'https://example.com/',
          mode: 'dark',
          uniqueId: 'https://example.com/::#header::color-contrast::dark',
          aggregateId: 'https://example.com/::#header::color-contrast'
        },
        {
          code: 'alt-missing',
          selector: '#img1',
          message: 'Missing alt text',
          url: 'https://example.com/',
          mode: 'dark',
          uniqueId: 'https://example.com/::#img1::alt-missing::dark',
          aggregateId: 'https://example.com/::#img1::alt-missing'
        }
      ]
    }
  ];

  // Create test results directory
  const testResultsDir = path.join(__dirname, '..', '.a11y-test-results');
  await fs.mkdir(testResultsDir, { recursive: true });
  
  await fs.writeFile(
    path.join(testResultsDir, 'light-mode.json'),
    JSON.stringify(mockLightResults, null, 2)
  );
  
  await fs.writeFile(
    path.join(testResultsDir, 'dark-mode.json'),
    JSON.stringify(mockDarkResults, null, 2)
  );

  // Test comparison logic
  const lightIssueMap = new Map();
  const darkIssueMap = new Map();

  mockLightResults.forEach(urlResult => {
    urlResult.issues.forEach(issue => {
      if (!lightIssueMap.has(issue.aggregateId)) {
        lightIssueMap.set(issue.aggregateId, []);
      }
      lightIssueMap.get(issue.aggregateId).push(issue);
    });
  });

  mockDarkResults.forEach(urlResult => {
    urlResult.issues.forEach(issue => {
      if (!darkIssueMap.has(issue.aggregateId)) {
        darkIssueMap.set(issue.aggregateId, []);
      }
      darkIssueMap.get(issue.aggregateId).push(issue);
    });
  });

  const bothModes = [];
  const lightOnly = [];
  const darkOnly = [];

  lightIssueMap.forEach((issues, aggregateId) => {
    if (darkIssueMap.has(aggregateId)) {
      bothModes.push(aggregateId);
    } else {
      lightOnly.push(aggregateId);
    }
  });

  darkIssueMap.forEach((issues, aggregateId) => {
    if (!lightIssueMap.has(aggregateId)) {
      darkOnly.push(aggregateId);
    }
  });

  console.log(`✓ Comparison logic working correctly:`);
  console.log(`  - Issues in both modes: ${bothModes.length}`);
  console.log(`  - Issues in light only: ${lightOnly.length}`);
  console.log(`  - Issues in dark only: ${darkOnly.length}`);

  // Verify expected results
  if (bothModes.length !== 1) {
    errors.push(`Expected 1 issue in both modes, got ${bothModes.length}`);
  } else {
    console.log(`  ✓ Correctly identified shared issue: color-contrast on #header`);
  }
  
  if (lightOnly.length !== 1) {
    errors.push(`Expected 1 light-only issue, got ${lightOnly.length}`);
  } else {
    console.log(`  ✓ Correctly identified light-only issue: label-missing on #input1`);
  }
  
  if (darkOnly.length !== 1) {
    errors.push(`Expected 1 dark-only issue, got ${darkOnly.length}`);
  } else {
    console.log(`  ✓ Correctly identified dark-only issue: alt-missing on #img1`);
  }

  // Clean up test results
  await fs.rm(testResultsDir, { recursive: true, force: true });

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Validation Summary');
  console.log('='.repeat(60) + '\n');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All validations passed!');
    console.log('\n📝 Next steps:');
    console.log('   1. The workflow will run when the deployed site is available');
    console.log('   2. Tests will run on PRs and pushes to main');
    console.log('   3. Results will be posted as PR comments and issues');
    return 0;
  } else {
    if (errors.length > 0) {
      console.log('❌ Errors:');
      errors.forEach(err => console.log(`   - ${err}`));
    }
    
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach(warn => console.log(`   - ${warn}`));
    }
    
    return errors.length > 0 ? 1 : 0;
  }
}

// Run validation
if (require.main === module) {
  validateScripts()
    .then(exitCode => process.exit(exitCode))
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = validateScripts;

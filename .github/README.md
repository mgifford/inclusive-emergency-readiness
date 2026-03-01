# GitHub Actions Workflows

This directory contains automated workflows that help maintain the quality and accessibility of the Inclusive Emergency Readiness project.

## Workflows

### 1. Link Rot Guard (`link-checker.yml`)

**Purpose:** Automatically checks for broken links in both the repository source files and the deployed website.

**Schedule:** Runs weekly every Sunday at 2 AM UTC

**Manual Trigger:** Can be triggered manually from the Actions tab

**What it checks:**
- **Markdown Source Files:** Scans all `.md` files in the repository and tests external links
- **Deployed Website:** Crawls https://mgifford.github.io/inclusive-emergency-readiness/ and checks all links on published pages

**Failure Handling:**
- If broken links are found, an issue is automatically created with the label `link-rot`
- The workflow provides Wayback Machine archive URLs as alternatives
- If an issue already exists, it updates that issue instead of creating duplicates

**Why this matters:**
Emergency preparedness information must be reliable. Broken links can prevent people from accessing critical resources during emergencies. This workflow aligns with the **Link-Rot & Archive Guard** protocol defined in `AGENTS.md`.

**How to manually run:**
1. Go to the [Actions tab](https://github.com/mgifford/inclusive-emergency-readiness/actions)
2. Select "Link Rot Guard" workflow
3. Click "Run workflow" button
4. Wait for results (typically 2-5 minutes)

---

### 2. Linter of Clarity (`readability-check.yml`)

**Purpose:** Ensures all markdown content meets Grade 6 reading level for accessibility.

**Triggers:**
- Pull requests that modify `.md` files
- Pushes to main branch that modify `.md` files
- Manual trigger

**What it checks:**
- Flesch-Kincaid Grade Level (target: ≤6.0)
- Flesch Reading Ease Score (target: ≥60)

**Why this matters:**
During emergencies, people are under stress. Cognitive disabilities, language barriers, and high-stress situations all make simple language critical. Grade 6 reading level ensures maximum accessibility.

---

### 3. Deploy Jekyll to GitHub Pages (`deploy.yml`)

**Purpose:** Builds and deploys the Jekyll site to GitHub Pages.

**Triggers:**
- Pushes to main branch
- Manual trigger

**What it does:**
1. Checks out the repository
2. Sets up Ruby and installs dependencies
3. Builds the Jekyll site with proper base path
4. Deploys to GitHub Pages

**Why this matters:**
This ensures the website at https://mgifford.github.io/inclusive-emergency-readiness/ is always up-to-date with the latest changes.

---

## Workflow Artifacts

All workflows save their results as artifacts that can be downloaded for 30 days:

- **Link Rot Guard:** 
  - `markdown-link-check-results` - Results from checking markdown files
  - `website-link-check-results` - Results from checking deployed website
  
- **Linter of Clarity:**
  - `readability-results` - Detailed readability scores for all files

---

## Best Practices

1. **Review workflow results:** Check the Actions tab regularly for any issues
2. **Fix link rot promptly:** Broken links reduce trust and accessibility
3. **Maintain reading level:** Keep emergency content at Grade 6 or below
4. **Use manual triggers:** Test workflows before merging major changes

---

## Alignment with AGENTS.md

These workflows implement the autonomous governance protocols defined in `AGENTS.md`:

- **Workflow A: Link-Rot & Archive Guard** → `link-checker.yml`
- **"Linter of Clarity"** → `readability-check.yml`

For more details on the philosophy and requirements, see `AGENTS.md`.

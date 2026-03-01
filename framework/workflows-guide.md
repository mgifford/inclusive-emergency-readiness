---
layout: default
title: "Understanding Automated Workflows"
category: framework
summary: "Guide to interpreting automated checks for links, readability, and deployments"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Understanding Our Automated Workflows

## What Are Workflows?

**Workflows** are automated tasks.

They run when you push code or make changes.

They check for problems.

They help keep the site working.

---

## Our Three Main Workflows

### 1. Link Checker (Weekly)

**File:** `.github/workflows/link-checker.yml`

**What It Does:**
- Checks all links in markdown files
- Checks all links on the deployed website
- Finds broken links (404 errors)
- Suggests Archive.org alternatives

**When It Runs:**
- Every Monday at 9 AM
- When you manually trigger it

**How to Read Results:**

✅ **Green checkmark** = All links work

⚠️ **Orange warning** = Some links broken but suggested fixes available

❌ **Red X** = Critical errors (workflow failed to run)

### 2. Readability Checker (On Push)

**File:** `.github/workflows/readability-check.yml`

**What It Does:**
- Checks reading level of all `.md` files
- Calculates Flesch-Kincaid Grade Level
- Flags text above Grade 6
- Posts comments on Pull Requests

**When It Runs:**
- On every Pull Request
- When markdown files change
- When you push to main branch

**How to Read Results:**

The workflow will show "completed" but may have warnings.

**This is normal!** The workflow is designed to warn, not block.

**Look for:**
- 📖 Comment on your Pull Request
- List of files over Grade 6
- Suggestions to simplify text

**Example Output:**
```
⚠️ framework/matrix.md: Grade 11.4 (Target: ≤6)
⚠️ _disabilities/cognitive.md: Grade 9.2 (Target: ≤6)
✅ index.md: Grade 5.8
```

**What to Do:**
1. Check files flagged as warnings
2. Decide if they need simplification
3. Technical docs can be higher grade
4. Public-facing pages should be Grade 6

### 3. Deploy (On Merge)

**File:** `.github/workflows/deploy.yml`

**What It Does:**
- Builds the Jekyll site
- Deploys to GitHub Pages
- Makes site live

**When It Runs:**
- When code is merged to main branch

**How to Read Results:**

✅ **Success** = Site is now live

❌ **Failed** = Check logs for build errors

---

## Common Questions

### Q: Why Did My PR Get a "Warning"?

**A:** The readability checker found text over Grade 6.

**This does not block your PR.**

It's a reminder to use plain language.

### Q: What If I Need Technical Terms?

**A:** Some pages can be higher than Grade 6.

**Examples:**
- Framework documentation (for developers)
- Technical specifications (for implementers)
- Research citations (for academics)

**Rule:** Public-facing emergency info must be Grade 6.

### Q: The Link Checker Says a Link Is Broken. What Do I Do?

**Option 1:** Fix the link to point to the correct URL

**Option 2:** Use the Archive.org link suggested

**Option 3:** Remove the link if it's no longer relevant

**How to Fix:**
1. Find the file with the broken link
2. Edit the file
3. Update or remove the link
4. Commit and push

### Q: The Workflow "Failed" But Nothing Is Wrong

**A:** Check what actually failed.

**Common causes:**
- Readability warnings (not real failures)
- Link suggestions (informational only)
- Network timeouts (temporary issues)

**How to Check:**
1. Click on the workflow run
2. Read the job summary
3. Look for actual errors vs warnings

### Q: Can I Skip the Checks?

**A:** You shouldn't, but technically yes.

**To skip readability:**
Add to commit message:
```
[skip readability]
```

**To skip link check:**
Add to commit message:
```
[skip links]
```

**Warning:** Only skip if you're sure it's not needed.

---

## Example: Understanding a Readability Check Run

**Note:** This section uses a real workflow run as an example. The principles apply to all readability checker runs.

### What Happens in a Typical Run

1. A commit is pushed to a branch
2. The readability checker runs automatically
3. It analyzes all markdown files
4. It finds files over Grade 6 reading level
5. It posts warnings (but does not block the merge)
6. The workflow completes

### Why Warnings Don't Block Merges

The workflow is designed to be **informational, not blocking**.

**How it works:**
- The workflow step exits with code 0 (success)
- Warnings are posted as comments on Pull Requests
- Contributors can review and decide if changes are needed

**Reason:** Some technical documentation needs higher reading levels.

### What the Warnings Mean

The workflow flags files that exceed Grade 6 level.

**This is informational guidance.**

Your options:
- Simplify the flagged files if they're public-facing
- Leave them as-is if they're technical reference docs
- Add a note explaining why complex language is needed

### How to See Workflow Details

**For any failed or completed run:**

1. Go to the repository's **Actions** tab
2. Click on **Linter of Clarity** workflow
3. Select the specific run you want to review
4. Click on the job name to see detailed logs
5. Download artifacts for the full report

**Artifacts contain:**
- Full readability report with scores
- List of passing files
- Recommendations for improvement

---

## Improving Readability

### Tools

**Online:**
- [Hemingway Editor](http://www.hemingwayapp.com/)
- [Readable.com](https://readable.com/)

**Command Line:**
```bash
pip install textstat
python -c "import textstat; print(textstat.flesch_kincaid_grade(open('file.md').read()))"
```

### Tips

1. **Use shorter sentences** (15 words or less)
2. **Use simpler words** (avoid jargon)
3. **Use active voice** ("Do this" not "This should be done")
4. **Break up long paragraphs** (one idea per paragraph)
5. **Use bullet points** for lists
6. **Define technical terms** when they must be used

### Example Transformation

**Before (Grade 10):**
```
The implementation of accessible emergency communication 
systems necessitates comprehensive consideration of 
diverse disability categories and their respective 
technological requirements.
```

**After (Grade 6):**
```
Emergency systems must work for all disabilities.

Each disability has different tech needs.

Consider all of them.
```

---

## Setting Up Workflows in Your Fork

### If You Fork This Repository

**Good news:** Workflows come with the fork!

**But:** You need to enable them.

### Enable Workflows

1. Go to your forked repository
2. Click **Actions** tab
3. Click **I understand my workflows, go ahead and enable them**
4. Workflows will now run on your repo

### Customize for Your Needs

**Change schedule:**

Edit `.github/workflows/link-checker.yml`

Find:
```yaml
schedule:
  - cron: '0 9 * * 1'  # Every Monday at 9 AM
```

Change to your preferred schedule.

**Change grade level target:**

Edit `.github/workflows/readability-check.yml`

Find:
```bash
if (( $(echo "$grade > 6.0" | bc -l) )); then
```

Change `6.0` to your target grade level.

---

## Troubleshooting

### Workflow Won't Run

**Check:**
- [ ] Workflows are enabled (Actions tab)
- [ ] You have GitHub Actions permissions
- [ ] The workflow file is valid YAML

**Test:**
Run manually via **workflow_dispatch**

### Workflow Fails Every Time

**Check logs:**
1. Click on the failed run
2. Click on the job name
3. Read the step that failed
4. Look for error messages

**Common issues:**
- Missing dependencies (npm packages)
- Python import errors
- Network timeouts

**Fix:**
- Update package versions
- Check internet connectivity
- Re-run the workflow

### Can't Find Artifacts

**Check:**
- [ ] Artifacts are enabled in workflow
- [ ] Workflow completed (even with warnings)
- [ ] You have permission to view

**Access artifacts:**
1. Go to workflow run
2. Scroll to bottom
3. Click artifact name to download

---

## Best Practices

### For Contributors

1. **Run local checks before pushing**
   - Check links manually
   - Use online readability tools
   - Test in a browser

2. **Read workflow output**
   - Don't ignore warnings
   - Understand what they mean
   - Fix real issues

3. **Ask for help**
   - Open an Issue if confused
   - Tag maintainers
   - Provide workflow run URL

### For Maintainers

1. **Review workflow results weekly**
   - Check link checker report
   - Review readability trends
   - Update documentation as needed

2. **Keep workflows updated**
   - Update action versions
   - Test new features
   - Document changes

3. **Communicate clearly**
   - Explain warnings to contributors
   - Provide examples
   - Be supportive

---

## Related Resources

- [DEPLOYMENT.md](/DEPLOYMENT.md) - How to deploy the site
- [AGENTS.md](/AGENTS.md) - Instructions for automated checks
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**"Automation helps us maintain quality. Understanding it helps us improve."**

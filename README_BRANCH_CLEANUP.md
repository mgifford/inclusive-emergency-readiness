# How to Delete All Non-Main Branches

This guide provides step-by-step instructions to consolidate your repository to only the `main` branch.

## Method 1: GitHub Actions Workflow (Easiest)

**Recommended for repository administrators**

1. Go to https://github.com/mgifford/inclusive-emergency-readiness/actions/workflows/cleanup-branches.yml
2. Click "Run workflow"
3. Type `DELETE` in the confirmation field
4. Click the green "Run workflow" button
5. Wait for the workflow to complete
6. Check the summary for results

This method is safest and provides an audit trail.

## Method 2: Automated Script

Run the automated cleanup script locally:

```bash
chmod +x cleanup-branches.sh  # Make executable (first time only)
./cleanup-branches.sh
```

The script will:
1. List all branches to be deleted
2. Ask for confirmation
3. Delete each branch
4. Verify only `main` remains

**Requires:** GitHub CLI (`gh`) installed and authenticated

## Method 3: Manual Deletion via GitHub Web UI

1. Go to https://github.com/mgifford/inclusive-emergency-readiness/branches
2. For each branch (except `main`), click the trash icon
3. Confirm deletion

## Method 4: Using GitHub CLI Manually

Delete branches one at a time:

```bash
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/BRANCH_NAME -X DELETE
```

Replace `BRANCH_NAME` with each branch from the list in `BRANCH_CLEANUP.md`.

## After This PR Merges

Once this PR is merged to `main`, remember to delete this PR's branch too:

```bash
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/delete-non-main-branches -X DELETE
```

## Verification

Check that only `main` remains:

```bash
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads --jq '.[].ref' | sed 's#refs/heads/##'
```

Expected output:
```
main
```

## Files Created by This PR

- `BRANCH_CLEANUP.md` - Detailed documentation of branches to delete
- `cleanup-branches.sh` - Automated deletion script  
- `.github/workflows/cleanup-branches.yml` - GitHub Actions workflow for automated cleanup
- `README_BRANCH_CLEANUP.md` - This file

## Why Can't the Agent Delete Branches Automatically?

The Copilot agent operates with limited GitHub permissions for security. While it can create and modify files, it cannot delete remote branches directly. This requires either:
- Repository admin running the script with authenticated `gh` CLI
- Manual deletion via GitHub web interface
- GitHub Actions workflow (provided in this PR for safe, auditable deletion)

## Safety Notes

- All work from these branches has been merged to `main`
- No code will be lost
- This is a cleanup operation, not a destructive action
- You can always recover branches from GitHub's branch history if needed (within 30 days for most plans)

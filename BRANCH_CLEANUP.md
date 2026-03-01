# Branch Consolidation Plan

## Current Status

The repository currently has **15 branches** total:
- 1 main branch: `main`
- 14 feature/copilot branches to be deleted

## Branches to Delete

The following branches will be deleted to consolidate the repository to only the `main` branch:

1. `copilot/add-link-check-action`
2. `copilot/add-resource-directory`
3. `copilot/add-ui-ux-design-principles`
4. `copilot/address-issue-feedback`
5. `copilot/contribute-emergency-measures-guide`
6. `copilot/delete-non-main-branches` (this PR's branch - delete after merge)
7. `copilot/design-initial-file-structure`
8. `copilot/evaluate-proposed-changes`
9. `copilot/fix-116832-1169617933-070659bf-a600-444e-8fd1-ade45c6f843a`
10. `copilot/fix-display-issues`
11. `copilot/fix-error-in-emergency-readiness`
12. `copilot/fix-links-and-formatting`
13. `copilot/strategies-for-multi-platform`
14. `copilot/update-visual-appearance`

## Execution Plan

### Automated Cleanup Script

This repository includes a cleanup script that can be executed manually via GitHub CLI or API.

### Manual Deletion (If Automated Fails)

To delete branches manually using GitHub web interface:

1. Navigate to https://github.com/mgifford/inclusive-emergency-readiness/branches
2. Find each branch in the list above
3. Click the trash icon next to each branch
4. Confirm deletion

### Command Line Deletion

If you have GitHub CLI (`gh`) installed and authenticated:

```bash
# Delete all copilot branches except the current one
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/add-link-check-action -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/add-resource-directory -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/add-ui-ux-design-principles -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/address-issue-feedback -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/contribute-emergency-measures-guide -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/design-initial-file-structure -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/evaluate-proposed-changes -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/fix-116832-1169617933-070659bf-a600-444e-8fd1-ade45c6f843a -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/fix-display-issues -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/fix-error-in-emergency-readiness -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/fix-links-and-formatting -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/strategies-for-multi-platform -X DELETE
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/update-visual-appearance -X DELETE
```

After this PR is merged, delete the final branch:
```bash
gh api repos/mgifford/inclusive-emergency-readiness/git/refs/heads/copilot/delete-non-main-branches -X DELETE
```

## Verification

After deletion, verify only `main` remains:

```bash
git ls-remote --heads https://github.com/mgifford/inclusive-emergency-readiness
```

Expected output should show only:
```
<commit-sha>	refs/heads/main
```

## Important Notes

- All work from these branches has already been merged into `main` or is obsolete
- No work will be lost - `main` contains the latest approved code
- This consolidation simplifies repository management and reduces clutter
- Future work should continue to be done on feature branches that are promptly deleted after merge

#!/bin/bash

# Branch Cleanup Script for inclusive-emergency-readiness
# This script deletes all non-main branches from the repository

set -e

OWNER="mgifford"
REPO="inclusive-emergency-readiness"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if gh CLI is available
if ! command -v gh &> /dev/null; then
    echo -e "${RED}Error: GitHub CLI (gh) is not installed.${NC}"
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo -e "${RED}Error: Not authenticated with GitHub CLI.${NC}"
    echo "Please run: gh auth login"
    exit 1
fi

echo -e "${YELLOW}Branch Cleanup Script${NC}"
echo "Repository: $OWNER/$REPO"
echo ""

# Fetch all remote branches
echo "Fetching remote branches..."
BRANCHES=$(gh api "repos/$OWNER/$REPO/git/refs/heads" --jq '.[].ref' | sed 's#refs/heads/##' | grep -v "^main$")

if [ -z "$BRANCHES" ]; then
    echo -e "${GREEN}No branches to delete. Only main branch exists.${NC}"
    exit 0
fi

echo -e "${YELLOW}Branches to be deleted:${NC}"
echo "$BRANCHES" | nl
echo ""

# Count branches
BRANCH_COUNT=$(echo "$BRANCHES" | wc -l)
echo "Total branches to delete: $BRANCH_COUNT"
echo ""

# Confirmation prompt
read -p "Do you want to proceed with deletion? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo -e "${YELLOW}Aborted. No branches were deleted.${NC}"
    exit 0
fi

echo ""
echo "Starting deletion..."

# Delete each branch
DELETED=0
FAILED=0

while IFS= read -r branch; do
    echo -n "Deleting $branch... "
    
    if gh api "repos/$OWNER/$REPO/git/refs/heads/$branch" -X DELETE &> /dev/null; then
        echo -e "${GREEN}✓${NC}"
        ((DELETED++))
    else
        echo -e "${RED}✗${NC}"
        ((FAILED++))
    fi
done <<< "$BRANCHES"

echo ""
echo -e "${GREEN}Deletion complete!${NC}"
echo "Successfully deleted: $DELETED branches"

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Failed to delete: $FAILED branches${NC}"
fi

echo ""
echo "Verifying remaining branches..."
REMAINING=$(gh api "repos/$OWNER/$REPO/git/refs/heads" --jq '.[].ref' | sed 's#refs/heads/##')

echo -e "${YELLOW}Remaining branches:${NC}"
echo "$REMAINING"

if [ "$(echo "$REMAINING" | wc -l)" -eq 1 ] && [ "$REMAINING" = "main" ]; then
    echo ""
    echo -e "${GREEN}✓ Success! Only main branch remains.${NC}"
else
    echo ""
    echo -e "${YELLOW}Warning: Multiple branches still exist.${NC}"
fi

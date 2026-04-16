# PR Process

## Steps

1. **Check wiki** — update wiki files if needed (new features, API changes, config changes)
2. **Create PR**
3. **Update Obsidian** — add completed task entry describing the PR work
4. **Wait for CI checks** — poll every 15-20s until checks appear and complete
   - CI checks are ALWAYS configured — if pending, keep waiting
   - If failed, investigate and fix before merging
5. **Merge** only when all checks pass
6. **Auto-cleanup** after merge:
   ```bash
   git checkout main && git pull origin main
   git worktree remove .worktrees/<name>
   git branch -d <branch>  # or -D if squash-merged
   git worktree prune && git remote prune origin
   ```

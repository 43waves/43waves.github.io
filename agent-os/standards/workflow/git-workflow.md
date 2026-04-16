# Git Workflow

## Worktree-Based Development

- **ALWAYS use git worktree** for features/fixes — NEVER work directly on main/master/develop
- Exception: Worktrees not required for claude, obsidian, and Unity repos
- One feature at a time — complete full workflow before starting the next

## Branch Naming

- Features: `feature/description`
- Fixes: `fix/description`
- Refactoring: `refactor/description`
- Lowercase with hyphens

## Worktree Convention

```bash
# Create worktree with new branch
git worktree add .worktrees/feature-name -b feature/feature-name

# Run dependency install in worktree
cd .worktrees/feature-name && flutter pub get  # or npm install, etc.
```

- Path: `.worktrees/<name>` inside project root
- Ensure `.worktrees/` is in `.gitignore`
- Run dependency install after creating worktree

## Cleanup After Merge

```bash
git checkout main && git pull origin main
git worktree remove .worktrees/<name>
git branch -d <branch>          # or -D if squash-merged
git worktree prune && git remote prune origin
```

## Rules

- Don't stage or commit without user approval
- Complete Testing & Quality workflow BEFORE any git operations

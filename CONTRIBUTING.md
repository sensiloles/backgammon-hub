# Contributing to Backgammon Hub

## 🚀 Development Workflow

### Making Changes

1. **Clone and setup**:
   ```bash
   git clone <repository-url>
   cd backgammon-hub
   npm install
   ```

2. **Start development**:
   ```bash
   npm run dev
   ```

3. **Make your changes** and ensure code quality:
   ```bash
   npm run check    # Check linting and formatting
   npm run format   # Format code
   ```

### 📝 Committing Changes

#### Option 1: Interactive Commit (Recommended)
```bash
npm run commit
```
This opens an interactive wizard that guides you through creating a properly formatted commit.

#### Option 2: Manual Commit
Follow the conventional commit format:
```bash
git commit -m "type(scope): description"
```

### 🏷️ Commit Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(auth): add login functionality` |
| `fix` | Bug fix | `fix(ui): resolve button alignment issue` |
| `docs` | Documentation | `docs: update installation guide` |
| `style` | Code style/formatting | `style: fix indentation in components` |
| `refactor` | Code refactoring | `refactor(api): extract validation logic` |
| `perf` | Performance improvement | `perf(game): optimize board rendering` |
| `test` | Tests | `test(auth): add login validation tests` |
| `build` | Build system changes | `build: update webpack config` |
| `ci` | CI configuration | `ci: add automated testing workflow` |
| `chore` | Maintenance | `chore: update dependencies` |

### 📏 Commit Guidelines

- **Subject line**: 50 characters or less
- **Body**: Wrap at 72 characters
- **Use imperative mood**: "add" not "added" or "adds"
- **Include scope when applicable**: `feat(game):`, `fix(ui):`
- **Reference issues**: `Closes #123` in body or footer

### ✅ Pre-commit Checks

Every commit automatically runs:
- **Biome linting** - Code quality checks
- **Biome formatting** - Code formatting
- **Commit message validation** - Ensures conventional commit format

### 🚫 Bypassing Hooks (Not Recommended)

Only in emergencies:
```bash
git commit --no-verify -m "emergency: critical production fix"
```

### 🔍 Checking Commit Format

```bash
# Validate last commit message
npm run commit:check
```

## 🛠️ Code Quality Standards

- Follow the configured Biome rules
- Use TypeScript strictly (avoid `any`)
- Write self-documenting code
- Add comments only for complex business logic
- Keep functions small and focused
- Use meaningful names for variables and functions

## 📦 Pull Request Process

1. Ensure all commits follow conventional commit format
2. Make sure all checks pass (`npm run check`)
3. Update documentation if needed
4. Write clear PR description
5. Reference related issues

## 🎯 Getting Help

- Check existing issues before creating new ones
- Use descriptive titles and provide context
- Include steps to reproduce for bugs
- Add relevant code snippets or screenshots

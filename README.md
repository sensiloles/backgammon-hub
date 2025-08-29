# Backgammon Hub

Modern React application with TypeScript, Vite, and Biome for creating a backgammon game.

## 🚀 Tech Stack

- **⚛️ React 19** - UI library
- **📘 TypeScript** - typed JavaScript
- **⚡ Vite** - fast build tool and dev server
- **🔧 Biome** - fast linter and formatter (replaces ESLint + Prettier)
- **🎨 SWC** - fast compilation

## 🛠️ Installation and Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build the project
npm run preview    # Preview build
npm run lint       # Check code with Biome
npm run lint:fix   # Fix issues automatically
npm run format     # Format code
npm run check      # Full code check
```

## 🎯 Auto-formatting Setup

### VS Code / Cursor

1. **Install Biome extension:**
   - Open Extensions (`Ctrl+Shift+X`)
   - Search and install `Biome`
   - Or VS Code will automatically suggest installation when opening the project

2. **Settings are already configured** in `.vscode/settings.json`:
   - ✅ Format on save
   - ✅ Biome as default formatter
   - ✅ Auto-organize imports
   - ✅ Auto-fix issues on save

3. **Verify it works:**
   - Open any `.tsx` or `.ts` file
   - Make changes and save (`Ctrl+S`)
   - Code should automatically format

### Manual Formatting

If auto-formatting doesn't work, use commands:

```bash
# Format entire project
npm run format

# Check and fix all issues
npm run lint:fix
```

## 📋 Biome Configuration Features

- **🎨 Formatting:** 2-space indentation, single quotes
- **🔍 Linting:** recommended rules + additional React rules
- **📦 Imports:** automatic sorting and organization
- **⚡ Performance:** 10-100x faster than ESLint

## 📦 Conventional Commits & Git Hooks

This project uses standardized commit messages and automated code quality checks.

### 🚀 Quick Commit (Recommended)

```bash
# Interactive commit with guided prompts
npm run commit
```

This opens an interactive wizard that helps you create properly formatted conventional commits.

### 📋 Commit Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semi-colons, etc)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **build**: Changes to build system or external dependencies
- **ci**: Changes to CI configuration
- **chore**: Other changes that don't modify src or test files

### ✅ Pre-commit Checks

Every commit automatically runs:
- **Code linting** with Biome
- **Code formatting** with Biome
- **Commit message validation** with Commitlint

### 📖 Commit Examples

```bash
feat(auth): add JWT token refresh mechanism
fix(ui): resolve button alignment in mobile view
docs: update installation instructions in README
refactor(api): extract user validation logic
```

### 🛠️ Manual Git Operations

```bash
# Check last commit message format
npm run commit:check

# Skip hooks (not recommended)
git commit --no-verify -m "emergency fix"
```

## 🎮 About the Project

Backgammon Hub is a modern web implementation of the classic backgammon game with an intuitive interface and online multiplayer capabilities.

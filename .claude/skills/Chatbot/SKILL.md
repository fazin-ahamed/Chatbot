```markdown
# Chatbot Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches the core development patterns, coding conventions, and collaborative workflows used in the **Chatbot** TypeScript monorepo. The repository is organized for modularity and scalability, with a focus on shared UI components, feature-driven development, and robust testing. It employs consistent code style, structured workflows for common tasks (like moving UI components or upgrading packages), and clear conventions for configuration and documentation.

---

## Coding Conventions

**File Naming**
- Use **camelCase** for file names.
  - Example: `debouncedTextInput.tsx`, `iconPicker.tsx`

**Import Style**
- Use **alias imports** for modules.
  - Example:
    ```typescript
    import { EmojiPicker } from '@ui/components/emojiPicker'
    ```

**Export Style**
- Use **named exports**.
  - Example:
    ```typescript
    export function DebouncedTextInput(props: Props) { ... }
    ```

**General Patterns**
- Keep UI components in `packages/ui/src/components/` for shared use.
- Feature-specific logic lives under `apps/builder/src/features/[feature]/`.
- Use `package.json` and `tsconfig*.json` for each package to manage dependencies and TypeScript configuration.

---

## Workflows

### Move or Refactor Shared UI Components
**Trigger:** When you want to deduplicate, refactor, or share UI components across multiple packages/apps.  
**Command:** `/move-ui-component`

1. Move component file(s) from app-specific location (e.g., `apps/builder/src/components/`) to `packages/ui/src/components/`.
2. Update or add supporting files (hooks, icon lists) in `packages/ui/`.
3. Update all imports/usages in `apps/builder` and other consumers to use the new shared location.
4. Update or add `package.json` and `tsconfig` files as needed.
5. Remove old/duplicate component files from app-specific locations.

**Example:**
```typescript
// Before (app-specific)
import { EmojiPicker } from '../../components/emojiPicker'

// After (shared)
import { EmojiPicker } from '@ui/components/emojiPicker'
```

---

### Add or Refactor Feature with Migrations
**Trigger:** When adding a new core feature or domain model that requires backend, API, and DB changes.  
**Command:** `/new-feature-with-migration`

1. Create or update backend domain/application files in `packages/[feature]/src/`.
2. Add or update API handlers in `apps/builder/src/features/[feature]/api/`.
3. Update or create database schema and migration files in `packages/prisma/*/schema.prisma` and `migrations/`.
4. Update or add types in `apps/builder/src/features/[feature]/types.ts`.
5. Add/update React components for UI in `apps/builder/src/features/[feature]/components/`.
6. Update `tsconfig` and `package.json` as needed.
7. Add or update tests in `packages/[feature]/src/drivers/orpc/api.test.ts` or similar.

**Example:**
```typescript
// API handler example
export async function createSpace(req, res) {
  // logic here
}
```

---

### Package Upgrade and Lockfile Update
**Trigger:** When upgrading dependencies across the monorepo.  
**Command:** `/upgrade-packages`

1. Update `package.json` in multiple packages (apps and/or `packages/*`).
2. Update `bun.lock` or other lockfile.
3. Update `tsconfig` or `nx.json` if needed.
4. Commit all related changes together.

**Example:**
```json
// package.json
"dependencies": {
  "effect": "^2.0.0"
}
```

---

### Security or Bugfix in Multiple Related Files
**Trigger:** When fixing a bug or patching a security vulnerability affecting multiple files/components.  
**Command:** `/bugfix-multi`

1. Identify all affected files (helpers, API handlers, UI components, etc.).
2. Apply fix to each file.
3. Update related `package.json` or lockfile if needed.
4. Commit all changes together.

**Example:**
```typescript
// Before
if (user.isAdmin) { ... }

// After (security fix)
if (user?.role === 'admin') { ... }
```

---

### Update Shared Configs or tsconfigs
**Trigger:** When enforcing a new TypeScript setting or fixing config inconsistencies across all packages.  
**Command:** `/update-tsconfigs`

1. Update `tsconfig.lib.json` or `tsconfig.json` in all or most packages.
2. Update root `tsconfig.json` if needed.
3. Commit all config changes together.

**Example:**
```json
// tsconfig.lib.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}
```

---

### Add or Update Shared Skill or Docs
**Trigger:** When documenting or updating agent/AI skills or shared docs.  
**Command:** `/update-skill-docs`

1. Add or update `SKILL.md` or `PRACTICAL-TIPS.md` in `.agents/skills/[skill]/`.
2. Update or add related files in `.claude/skills/`.
3. Commit all changes together.

---

## Testing Patterns

- **Framework:** [vitest](https://vitest.dev/)
- **Test file pattern:** `*.spec.ts`
- **Location:** Tests are typically placed alongside source files or in dedicated test directories.
- **Example:**
  ```typescript
  // packages/ui/src/components/emojiPicker.spec.ts
  import { describe, it, expect } from 'vitest'
  import { EmojiPicker } from './emojiPicker'

  describe('EmojiPicker', () => {
    it('renders correctly', () => {
      // test logic
    })
  })
  ```

---

## Commands

| Command                | Purpose                                                                    |
|------------------------|----------------------------------------------------------------------------|
| /move-ui-component     | Move or refactor UI components to the shared UI package                    |
| /new-feature-with-migration | Add or refactor a feature, including backend, API, and DB migrations      |
| /upgrade-packages      | Upgrade dependencies and update lockfiles across packages                   |
| /bugfix-multi          | Apply a bugfix or security patch across multiple related files              |
| /update-tsconfigs      | Update shared TypeScript configuration files across packages                |
| /update-skill-docs     | Add or update shared skill documentation or agent instructions              |
```

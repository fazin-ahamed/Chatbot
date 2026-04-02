---
name: move-or-refactor-shared-ui-components
description: Workflow command scaffold for move-or-refactor-shared-ui-components in Chatbot.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /move-or-refactor-shared-ui-components

Use this workflow when working on **move-or-refactor-shared-ui-components** in `Chatbot`.

## Goal

Centralizes or refactors UI components (like Editable, EmojiPicker, IconPicker, DebouncedTextInput, EmojiOrImageIcon) into the shared UI package, updating all usages across apps and packages.

## Common Files

- `apps/builder/src/components/*.tsx`
- `apps/builder/src/features/**/components/*.tsx`
- `packages/ui/src/components/*.tsx`
- `packages/ui/package.json`
- `packages/ui/tsconfig*.json`
- `bun.lock`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Move component file(s) from app-specific location to packages/ui/src/components/
- Update or add supporting files (e.g., hooks, icon lists) in packages/ui/
- Update all imports/usages in apps/builder and other consumers to use the new shared location
- Update or add package.json and tsconfig files as needed
- Remove old/duplicate component files from app-specific locations

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
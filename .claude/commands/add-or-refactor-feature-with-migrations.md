---
name: add-or-refactor-feature-with-migrations
description: Workflow command scaffold for add-or-refactor-feature-with-migrations in Chatbot.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-refactor-feature-with-migrations

Use this workflow when working on **add-or-refactor-feature-with-migrations** in `Chatbot`.

## Goal

Implements a new domain feature (e.g., Spaces) or significant refactor, including backend logic, API endpoints, database schema changes, and related types/tests.

## Common Files

- `apps/builder/src/features/**/api/*.ts`
- `apps/builder/src/features/**/components/*.tsx`
- `apps/builder/src/features/**/types.ts`
- `packages/[feature]/src/**/*.ts`
- `packages/prisma/*/schema.prisma`
- `packages/prisma/*/migrations/*/migration.sql`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update backend domain/application files in packages/[feature]/src/
- Add or update API handlers in apps/builder/src/features/[feature]/api/
- Update or create database schema and migration files in packages/prisma/*/schema.prisma and migrations/
- Update or add types in apps/builder/src/features/[feature]/types.ts
- Add/update React components for UI in apps/builder/src/features/[feature]/components/

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
---
name: check
description: Run the checks configured for pecka — TypeScript, ESLint, Prettier, knip and an Astro build — and fix any failures. Use when asked to check, verify, or QA the code (e.g. "run the checks", "is it clean?", before committing/deploying).
---

# Static checks (pecka)

Run everything from the repo root. **pnpm is the package manager**
(`pnpm-lock.yaml` is checked in — don't use npm or yarn).

## The checks

| Check      | Command              | Notes                                                                 |
| ---------- | -------------------- | --------------------------------------------------------------------- |
| Everything | `pnpm check`         | Runs the four below in order, stopping at the first failure            |
| Types      | `pnpm typecheck`     | `astro check` — covers `.astro` and `.tsx`, strict mode on             |
| Lint       | `pnpm lint:check`    | ESLint flat config, type-aware rules                                   |
| Format     | `pnpm format:check`  | Prettier (no semicolons, single quotes, 90 cols, sorted imports)       |
| Dead code  | `pnpm knip`          | Unused files, exports and dependencies                                 |
| Build      | `pnpm build`         | `astro build` — catches image-pipeline and SSR errors typecheck misses |

`pnpm check` is fast and should be run after most edits. Run `pnpm build` too
before shipping: the build renders every React island server-side and resolves
every `astro:assets` transform, neither of which `astro check` touches.

## How to fix

- **Types** — strict mode plus `noUncheckedIndexedAccess`. Fix at the source;
  don't reach for `as`/`!` unless the surrounding code already does.
- **Lint** — `pnpm lint:fix` handles the mechanical ones. Two rules bite often:
  parent-relative imports are banned (use the `@/` alias) and `type` is required
  over `interface`.
- **Format** — `pnpm format:write`.
- **Build failures** — a failing build after a passing typecheck is usually
  either a CommonJS-only dependency breaking SSR or an `astro:assets` transform
  whose source path doesn't resolve. Delete `dist/` and `.astro/` if the error
  looks like a stale cache rather than real code.
- **`X is not a function` / `Element type is invalid … got: object` during SSR**
  — a package that only publishes CommonJS. Node's ESM interop ignores its
  `__esModule` marker and hands back the whole namespace instead of the default
  export. Unwrap it at the import site (see `MobileNavigation.tsx`) rather than
  reaching for `vite.ssr.noExternal`: bundling doesn't reliably fix the interop
  here, and it breaks `astro dev` for packages that ship no ESM build at all.
- **Always smoke-test `pnpm dev` too.** `astro dev` and `astro build` resolve
  dependencies differently, so a green build does not prove the dev server
  starts.

## Notes

- No test framework is configured — don't add test files or assume one exists.
- Visual regressions are the real risk in this repo. If a change touches layout,
  build and `pnpm preview`, then compare against the live site rather than
  trusting the checks alone.

## Done criterion

`pnpm check` exits 0, and `pnpm build` succeeds when preparing to ship. Report a
short summary of what each check found and what you changed.

# Lumora UI Agent Rules

This directory contains Cursor/Cursor-like MDC rule files to guide AI agents when using the `@astrake/lumora-ui` package.

## Rules
- `lumora-ui-components.mdc`: Guides agents to read JSDocs, avoid prop hallucinations, and use standard components.
- `lumora-ui-styles.mdc`: Explains the static BEM CSS system and bans Tailwind utility usage on component `class` props.
- `lumora-ui-shells.mdc`: Enforces namespace isolation between Mobile, Desktop, and Embedded shells, and explains layout slots.

---
id: testing-contracts
name: "Testing Infrastructure & Mocks"
category: rules
severity: high
applies_to:
  - "packages/core/src/**/__tests__/**/*.test.ts"
  - "vitest.config.mts"
  - "packages/core/src/__mocks__/empty.ts"
---

# Testing Infrastructure & Mocks

We utilize Vitest + happy-dom for lightning-fast test execution. Heavy or non-essential browser-facing peer dependencies (such as ECharts, Tiptap, Sortable) must be mocked out.

## Testing Guidelines

1. **Colocation**: Place unit tests inside a nested `__tests__/` directory relative to the component being tested.
2. **Context Injection**: All components utilize `useLumoraConfig()`. In test suites, inject the configuration context using global mounting parameters:
   ```ts
   import { LumoraUIConfigKey } from "../../context";
   // inside mount()...
   global: {
     provide: {
       [LumoraUIConfigKey as any]: { skin: mockSkin }
     }
   }
   ```
3. **Heavy Dependency Stubbing**:
   - If a new component imports a heavy external library (e.g. charts or text editors), add its exports to the stub file `packages/core/src/__mocks__/empty.ts`.
   - Map the dependency path to `empty.ts` inside `vitest.config.mts` in the `alias` configuration.

## The Rule

- **[NEVER]** Add a heavy test dependency without configuring an alias mapping to `__mocks__/empty.ts`.
- All tests must run and complete within the Happy DOM environment without executing actual Canvas operations or mounting rich text systems.

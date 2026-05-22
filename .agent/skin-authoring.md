# Skin Authoring & Theming — `@astrake/lumora-ui`

All styling inside Lumora UI is governed by the skin system. Instead of styling elements with hardcoded Tailwind/CSS classes inside Vue template markups, styles are mapped via a dynamic dictionary named `SkinMap`.

This guide outlines how to configure, extend, and authorize classes within the `SkinMap` system.

---

## 1. Type Interface Reference

The `SkinMap` is structured as a nested object dictionary mapping components to their corresponding default and variant class strings:

```ts
// packages/core/src/types.ts
export type SkinMap = {
  [componentName: string]: {
    default?: string;               // Base styles always applied to the element
    [variant: string]: string | undefined; // Variant styles (e.g., 'primary', 'active', 'expanded')
  };
};
```

---

## 2. Dynamic Merging via `extendSkin`

When a consumer installs the framework with a custom skin parameter, `useLumoraConfig()` merges the custom configuration over the baseline `defaultSkin` using the `extendSkin()` utility.

### Extension Logic
1. If a key is present in `defaultSkin` but NOT in the user's custom skin, the default skin styles are retained.
2. If a key is overridden in the user's custom skin, the utility extends it by merging nested property configurations (`default` and individual variant keys).
3. Value strings are resolved and clean-merged, avoiding replacing an entire component block if the user only wanted to customize one specific variant (e.g., custom primary button color).

---

## 3. Precedence & Conflict Resolution via `cn()`

The `cn()` helper (located in `src/utils.ts`) compiles class lists, and implements intelligent overrides:
* **Precedence**: `variant` classes are appended AFTER `default` classes, giving them visual precedence.
* **De-duplication**: The class combiner ensures that tail-end utility definitions (such as background overrides or size overrides) intelligently swap and replace previous definitions rather than creating layout conflicts.

```ts
// Context resolution:
// Classes array = [componentSkin.default, componentSkin[variant]]
const resolvedClasses = cn(classes);
```

---

## 4. Complete Skin Key Index Reference

Use this index to target components when styling or overriding themes inside the skin system.

### Layout Primitives

| Component Key | Variant Keys | Purpose |
|:---|:---|:---|
| `LuStack` | `default`, `vertical`, `horizontal`, `container` | Flex stacks and main max-width page container blocks |
| `LuDock` | `default`, `vertical`, `horizontal` | View docking frames |
| `LuDockItem` | `default`, `top`, `bottom`, `left`, `right`, `fill` | Multi-directional dock regions |
| `LuFixed` | `default` | Layout panels that cannot stretch or shrink |
| `LuFill` | `default` | Layout panels filling available space |
| `LuScroll` | `default`, `horizontal` | Scroll containers |
| `LuOverlay` | `default` | Absolute positioned layers |
| `LuGrid` | `default`, `responsive-3` | Grid systems |
| `LuSplit` | `default`, `horizontal`, `vertical` | Resizable pane container |
| `LuSplitPane` | `default` | Resizable pane item |
| `LuSplitResizer` | `default`, `horizontal`, `vertical` | Separator line bar draggable target |

### Shell Containers

#### Desktop Shell
* `LuDesktopShell`
* `LuDesktopShellContentWrapper`
* `LuDesktopShellMainContent`
* `LuDesktopTopBar`
* `LuDesktopSidebar`
* `LuDesktopSidebarHeader`
* `LuDesktopSidebarContent`
* `LuDesktopSidebarFooter`
* `LuDesktopStatusBar`
* `LuDesktopRailBar` (Variants: `expanded`)
* `LuDesktopRailItem` (Variants: `active`)

#### Mobile Shell
* `LuMobileShell`
* `LuMobileHeader`
* `LuMobileNavBar`
* `LuMobileNavBarItem` (Variants: `active`)

#### Embedded Shell
* `LuEmbeddedShell`
* `LuEmbeddedHeader`
* `LuEmbeddedContent`
* `LuEmbeddedFooter`

### Shared Primitives

| Component Key | Variant Keys | Purpose |
|:---|:---|:---|
| `LuButton` | `default`, `primary`, `secondary`, `success`, `danger`, `ghost`, `link` | Generic action buttons |
| `LuInput` | `default`, `error`, `disabled` | Text input boxes |
| `LuSelect` | `default`, `error`, `disabled` | Selection menus |
| `LuSwitch` | `default`, `checked`, `disabled` | Toggle switch pills |
| `LuBadge` | `default`, `primary`, `secondary`, `success`, `danger` | Text tag count indicators |
| `LuCard` | `default`, `header`, `body`, `footer` | Section blocks |
| `LuForm` | `default` | Structural form blocks |
| `LuIcon` | `default` | SVG icon sizing block wrapper |
| `LuSpinner` | `default` | Loading indicator spinner SVG |

---

## 5. Skin Creation Guidelines
* **Color Schemes**: Use Tailwind's default palette or HSL tailored palettes (e.g. `bg-zinc-50 dark:bg-zinc-950`).
* **Hover State Style**: Always implement hover triggers in `default` or variant options using custom interactive classes.
* **Avoid Raw Sizing**: Stick to relative percentages or standard sizing (`h-full`, `w-full`, `flex-1`) inside primary container elements to ensure standard viewport responsiveness.

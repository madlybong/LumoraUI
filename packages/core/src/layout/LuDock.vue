<script lang="ts">
import { h, defineComponent, computed, Fragment, Comment } from "vue";
import type { VNode } from "vue";

/**
 * Recursive structural dock layout.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - Use `LuDock` with `LuDockItem` children to dock elements to the top, bottom, left, or right edges of the container, leaving the final item to fill the remaining space.
 * - `LuDock` is strictly a layout primitive. It does NOT automatically add padding inside the dock items.
 */
export default defineComponent({
  name: "LuDock",
  props: {
    /** Visual variant. Resolves to BEM modifier `lu-dock--{variant}`. */
    variant: String,
  },
  setup(props, { slots, attrs }) {
    const resolvedSkin = computed(() => `lu-dock ${props.variant && props.variant !== "default" ? "lu-dock--"+props.variant : ""}`.trim());

    function flattenChildren(children: any[]): VNode[] {
      let result: VNode[] = [];
      for (const child of children) {
        if (Array.isArray(child)) {
          result.push(...flattenChildren(child));
        } else if (child.type === Fragment) {
          result.push(...flattenChildren(child.children as any[]));
        } else if (child && child.type && child.type !== Comment) {
          result.push(child);
        }
      }
      return result;
    }

    return () => {
      const defaultSlot = slots.default ? slots.default() : [];
      const children = flattenChildren(defaultSlot);

      if (children.length === 0) {
        return h("div", { ...attrs, class: resolvedSkin.value });
      }

      let currentContainer = h("div", { class: "lu-dock__pane" }, [children[children.length - 1]]);

      for (let i = children.length - 2; i >= 0; i--) {
        const item = children[i];
        const edge = item.props?.dock || "left";

        const isVertical = edge === "top" || edge === "bottom";
        const dirClass = isVertical ? "lu-dock__pane lu-dock__pane--col" : "lu-dock__pane lu-dock__pane--row";

        const nodes = (edge === "top" || edge === "left") 
          ? [item, currentContainer] 
          : [currentContainer, item];

        currentContainer = h("div", { class: dirClass }, nodes);
      }

      return h("div", { ...attrs, class: resolvedSkin.value }, [currentContainer]);
    };
  }
});
</script>

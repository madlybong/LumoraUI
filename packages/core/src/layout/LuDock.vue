<script lang="ts">
import { h, defineComponent, computed, Fragment, VNode, Comment } from "vue";
import { useLumoraConfig } from "../context";

export default defineComponent({
  name: "LuDock",
  props: {
    variant: String,
  },
  setup(props, { slots, attrs }) {
    const { resolveSkin } = useLumoraConfig();
    const resolvedSkin = computed(() => resolveSkin("LuDock", props.variant));

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

      let currentContainer = h("div", { class: "flex flex-col flex-1 min-h-0 min-w-0 overflow-hidden" }, [children[children.length - 1]]);

      for (let i = children.length - 2; i >= 0; i--) {
        const item = children[i];
        const edge = item.props?.dock || "left";

        const isVertical = edge === "top" || edge === "bottom";
        const flexDirection = isVertical ? "flex-col" : "flex-row";

        const nodes = (edge === "top" || edge === "left") 
          ? [item, currentContainer] 
          : [currentContainer, item];

        currentContainer = h("div", { class: `flex ${flexDirection} flex-1 min-h-0 min-w-0 overflow-hidden` }, nodes);
      }

      return h("div", { ...attrs, class: resolvedSkin.value }, [currentContainer]);
    };
  }
});
</script>

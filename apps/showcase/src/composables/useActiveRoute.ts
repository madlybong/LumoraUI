import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useActiveRoute() {
  const route = useRoute();

  const isActive = (path: string) => {
    if (path === '/') return route.path === '/';
    return route.path.startsWith(path);
  };

  return { isActive };
}

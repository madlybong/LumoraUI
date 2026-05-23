import { shallowReactive } from 'vue';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: 'success' | 'error' | 'warning' | 'info' | string;
  duration?: number;
}

export const activeToasts = shallowReactive<ToastItem[]>([]);

let toastIdCounter = 0;

export function useLuToast() {
  const toast = (options: Omit<ToastItem, 'id'>) => {
    const id = `lu-toast-${toastIdCounter++}`;
    const duration = options.duration !== undefined ? options.duration : 4000;
    
    const newToast: ToastItem = {
      id,
      title: options.title,
      description: options.description,
      variant: options.variant || 'info',
      duration
    };

    activeToasts.push(newToast);

    if (duration > 0) {
      setTimeout(() => {
        dismiss(id);
      }, duration);
    }

    return id;
  };

  const dismiss = (id: string) => {
    const index = activeToasts.findIndex(t => t.id === id);
    if (index !== -1) {
      activeToasts.splice(index, 1);
    }
  };

  const dismissAll = () => {
    activeToasts.splice(0, activeToasts.length);
  };

  return {
    toasts: activeToasts,
    toast,
    dismiss,
    dismissAll
  };
}

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { LuButton } from '../index';

describe('LuButton', () => {
  it('renders default button', () => {
    const wrapper = mount(LuButton, {
      slots: {
        default: 'Click me'
      }
    });
    expect(wrapper.text()).toBe('Click me');
    expect(wrapper.classes()).toContain('lu-button');
  });

  it('applies align prop correctly', () => {
    const wrapperLeft = mount(LuButton, {
      props: { align: 'left' }
    });
    expect(wrapperLeft.classes()).toContain('lu-button--align-left');

    const wrapperRight = mount(LuButton, {
      props: { align: 'right' }
    });
    expect(wrapperRight.classes()).toContain('lu-button--align-right');
  });

  it('applies full prop correctly', () => {
    const wrapper = mount(LuButton, {
      props: { full: true }
    });
    expect(wrapper.classes()).toContain('lu-button--full');
  });
});

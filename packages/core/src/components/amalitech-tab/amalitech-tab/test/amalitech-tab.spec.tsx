import { newSpecPage } from '@stencil/core/testing';
import { AmalitechTab } from '../amalitech-tab';

describe('amalitech-tab', () => {
  it('renders a tab with default values', async () => {
    const page = await newSpecPage({
      components: [AmalitechTab],
      html: `<amalitech-tab></amalitech-tab>`,
    });

    expect(page.root).toBeDefined();
    expect(page.rootInstance).toBeInstanceOf(AmalitechTab);
  });

  it('sets activeIndex based on prop', async () => {
    const page = await newSpecPage({
      components: [AmalitechTab],
      html: `<amalitech-tab active-index="1"></amalitech-tab>`,
    });

    const component = page.rootInstance;

    expect(component.activeIndex).toBe(1);
  });
});

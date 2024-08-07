import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-tab-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-tab-panel></amalitech-tab-panel>');

    const element = await page.find('amalitech-tab-panel');
    expect(element).toHaveClass('hydrated');
  }, 10000);
});

import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-tab></amalitech-tab>');

    const element = await page.find('amalitech-tab');
    expect(element).toBeTruthy();
  });
});

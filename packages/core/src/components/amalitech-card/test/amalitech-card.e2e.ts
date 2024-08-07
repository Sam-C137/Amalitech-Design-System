import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-card></amalitech-card>');

    const element = await page.find('amalitech-card');
    expect(element).toHaveClass('hydrated');
  }, 10000);
});

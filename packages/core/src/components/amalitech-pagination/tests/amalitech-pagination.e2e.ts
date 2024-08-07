import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-pagination></amalitech-pagination>');

    const element = await page.find('amalitech-pagination');
    expect(element).toHaveClass('hydrated');
  });
});

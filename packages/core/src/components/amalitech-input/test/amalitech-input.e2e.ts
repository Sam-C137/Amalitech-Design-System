import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-input></amalitech-input>');

    const element = await page.find('amalitech-input');
    expect(element).toHaveClass('hydrated');
  });
});

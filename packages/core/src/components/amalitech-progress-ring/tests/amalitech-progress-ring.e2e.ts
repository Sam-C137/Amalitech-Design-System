import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-progress-ring', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-progress-ring></amalitech-progress-ring>');

    const element = await page.find('amalitech-progress-ring');
    expect(element).toHaveClass('hydrated');
  });
});

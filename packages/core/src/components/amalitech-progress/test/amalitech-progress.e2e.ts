import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-progress e2e', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-progress></amalitech-progress>');
    const element = await page.find('amalitech-progress');
    expect(element).toHaveClass('hydrated');
  });
});

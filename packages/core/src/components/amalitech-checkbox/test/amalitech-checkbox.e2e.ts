import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-checkbox></amalitech-checkbox>');

    const element = await page.find('amalitech-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});

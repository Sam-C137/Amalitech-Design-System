import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-map></amalitech-map>');

    const element = await page.find('amalitech-map');
    expect(element).toHaveClass('hydrated');
  });
});

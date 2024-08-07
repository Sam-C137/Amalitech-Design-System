import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-nav-item></amalitech-nav-item>');

    const element = await page.find('amalitech-nav-item');
    expect(element).toHaveClass('hydrated');
  });

  it('activates', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-nav-item>Home</amalitech-nav-item>');
    const component = await page.find('amalitech-nav-item');

    await component.click();

    await page.waitForChanges();

    expect(component).toHaveAttribute('active');
  });
});

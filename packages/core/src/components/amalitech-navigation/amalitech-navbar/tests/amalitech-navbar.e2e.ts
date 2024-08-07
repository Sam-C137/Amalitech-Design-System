import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-navbar></amalitech-navbar>');

    const element = await page.find('amalitech-navbar');
    expect(element).toHaveClass('hydrated');
  });

  it('switches fields', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-navbar><amalitech-nav-item>Home</amalitech-nav-item></amalitech-navbar>');
    const navItem = await page.find('amalitech-nav-item');

    await navItem.click();

    await page.waitForChanges();

    expect(navItem).toHaveAttribute('active');
  });
});

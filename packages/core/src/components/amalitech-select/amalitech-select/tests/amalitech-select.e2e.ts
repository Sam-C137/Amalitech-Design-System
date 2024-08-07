import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-select', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-select></amalitech-select>');
    const component = await page.find('amalitech-select');

    expect(await component.getProperty('disabled')).toBe(false);
    expect(await component.getProperty('open')).toBe(false);

    await component.click();
    await page.waitForChanges();

    expect(await component.getProperty('open')).toBe(false);

    await component.click();
    await page.waitForChanges();

    new Promise(r => setTimeout(async () => r(expect(await component).not.toHaveAttribute('open')), 400));
  });
});

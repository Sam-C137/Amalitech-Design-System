import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-modal></amalitech-modal>');
    const element = await page.find('amalitech-modal');
    expect(element).toHaveClass('hydrated');
  });

  it('opens and closes the modal', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-modal></amalitech-modal>');
    const component = await page.find('amalitech-modal');
    const modal = await page.find('amalitech-modal >>> div');

    await component.callMethod('openModal');
    await page.waitForChanges();

    const modalVisible = await modal.isVisible();
    expect(modalVisible).toBe(true);

    await component.callMethod('closeModal');
    await page.waitForChanges();

    const modalNotVisible = await modal.isVisible();
    expect(modalNotVisible).toBe(false);
  });
});

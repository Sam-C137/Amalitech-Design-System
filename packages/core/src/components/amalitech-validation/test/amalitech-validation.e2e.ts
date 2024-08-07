import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-validation', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-validation></amalitech-validation>');
    const element = await page.find('amalitech-validation');
    expect(element).toHaveClass('hydrated');
  }, 10000);

  it('opens and closes the validation feedback', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-validation></amalitech-validation>');
    const component = await page.find('amalitech-validation');

    await page.waitForChanges();

    const componentVisible = await component.isVisible();
    expect(componentVisible).toBe(true);

    const mainElement = await page.find('amalitech-validation >>> main');
    const closeBtn = await mainElement.find('button');
    await closeBtn.click();

    await page.waitForChanges();

    const componentAfterClick = await page.find('amalitech-validation');

    expect(componentAfterClick).toBeNull();
  });
});

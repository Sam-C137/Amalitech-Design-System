import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000); // added to prevent timeout error

describe('amalitech-checkbox', () => {
  it('should trigger click events on the element', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-checkbox></amalitech-checkbox>');
    const element = await page.find('amalitech-checkbox');

    const clickSpy = await element.spyOnEvent('click');
    await element.click();
    await element.click();
    expect(clickSpy).toHaveReceivedEventTimes(2);
  });

  it('should reflect the "disabled" property', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-checkbox disabled></amalitech-checkbox>');
    const element = await page.find('amalitech-checkbox');
    const inputEl = element.shadowRoot.querySelector('input');

    expect(inputEl?.disabled).toBe(true);
  });
});

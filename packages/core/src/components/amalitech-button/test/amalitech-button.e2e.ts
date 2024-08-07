import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-button></amalitech-button>');
    const element = await page.find('amalitech-button');
    expect(element).toHaveClass('hydrated');
  });

  it('triggers click event', async () => {
    const page = await newE2EPage();

    await page.setContent('<amalitech-button></amalitech-button>');
    const button = await page.find('amalitech-button >>> button');

    const clickSpy = await button.spyOnEvent('click');

    await button.click();

    expect(clickSpy).toHaveReceivedEventTimes(1);
  });
});

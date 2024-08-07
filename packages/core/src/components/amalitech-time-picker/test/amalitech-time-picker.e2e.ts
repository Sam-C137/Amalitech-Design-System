import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-time-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-time-picker></amalitech-time-picker>');

    const element = await page.find('amalitech-time-picker');
    expect(element).toHaveClass('hydrated');
  });

  it('opens and closes', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-time-picker></amalitech-time-picker>');
    const spanElement = await page.find('amalitech-time-picker >>> div');
    const mainElement = await page.find('amalitech-time-picker >>> main');

    await spanElement.click();
    await page.waitForChanges();

    const dropdownVisible = await mainElement.isVisible();
    expect(dropdownVisible).toBe(true);

    await spanElement.click();
    await page.waitForChanges();

    expect(mainElement.classList.contains('open')).toBe(false);
  });

  it('emits a time event detail', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-time-picker></amalitech-time-picker>');

    const mainElement = await page.find('amalitech-time-picker >>> main');
    const spanElement = await page.find('amalitech-time-picker >>> div');
    const summaryElement = await mainElement.find('summary');
    const timeWrapper = await summaryElement.find('div');
    const timeElement = await timeWrapper.find('button');

    const timeEvent = await page.spyOnEvent('amalitechTimeChange');

    await spanElement.click();
    await page.waitForChanges();

    await timeElement.click();
    await page.waitForChanges();

    expect(timeEvent).toHaveReceivedEventDetail({ time: '00:00', hour: '00', minute: '00', meridian: '' });
  });
});

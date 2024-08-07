import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-date-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-date-picker></amalitech-date-picker>');

    const elements = await page.find('amalitech-date-picker');
    expect(elements).toHaveClass('hydrated');
  });

  it('opens and closes', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-date-picker></amalitech-date-picker>');
    const headerElement = await page.find('amalitech-date-picker >>> header');
    const panel = await headerElement.find('section');
    const calendar = await page.find('amalitech-date-picker >>> section');

    await panel.click();
    await page.waitForChanges();

    const calendarVisible = await calendar.isVisible();
    expect(calendarVisible).toBe(true);

    await panel.click();
    await page.waitForChanges();

    expect(calendar).not.toHaveClass('open');
  });

  it('picks the right date from value attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-date-picker value="2024-02-16"></amalitech-date-picker>');
    const headerElement = await page.find('amalitech-date-picker >>> header');
    const panel = await headerElement.find('section');
    const datePanel = await panel.find('div');

    expect(datePanel).toEqualText('2024-02-16');
  });
});

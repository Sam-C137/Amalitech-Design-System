import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-switch></amalitech-switch>');

    const element = await page.find('amalitech-switch');
    expect(element).toHaveClass('hydrated');
  });

  it('checks and unchecks', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-switch></amalitech-switch>');
    const element = await page.find('amalitech-switch');
    const changeEvent = await element.spyOnEvent('amalitechSwitchChange');

    await element.click();
    await page.waitForChanges();

    expect(changeEvent).toHaveReceivedEventDetail({
      name: '',
      value: 'on',
      checked: true,
    });

    await element.click();
    await page.waitForChanges();
    expect(changeEvent).toHaveReceivedEventDetail({
      name: '',
      value: 'on',
      checked: false,
    });
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('AmalitechProgressBar E2E', () => {
  it('should display success icon when status is success', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-progress-bar status="success"></amalitech-progress-bar>');

    const svg = await page.find('amalitech-progress-bar >>> svg');
    expect(svg).not.toBeNull();
  });

  it('should display error icon when status is error', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-progress-bar status="error"></amalitech-progress-bar>');

    const svg = await page.find('amalitech-progress-bar >>> svg');
    expect(svg).not.toBeNull();
  });

  it('should display value when status is active and hide-value is false', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-progress-bar status="active" value="50"></amalitech-progress-bar>');

    const value = await page.find('amalitech-progress-bar >>> span');
    expect(value.textContent).toBe('50');
  });
});

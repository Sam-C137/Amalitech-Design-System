import { newE2EPage } from '@stencil/core/testing';

jest.setTimeout(30000);

describe('amalitech-snackbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-snackbar"></amalitech-snackbar>');
  });
});

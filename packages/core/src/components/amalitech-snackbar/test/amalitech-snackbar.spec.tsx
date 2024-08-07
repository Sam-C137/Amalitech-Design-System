import { newSpecPage } from '@stencil/core/testing';
import { AmalitechSnackbar } from '../amalitech-snackbar';

jest.setTimeout(30000);

describe('amalitech-snackbar', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [AmalitechSnackbar],
      html: `<amalitech-snackbar></amalitech-snackbar>`,
    });
  });

  it('should render with default props', async () => {
    expect(page.root).toMatchSnapshot();
  });

  it('should render when closeable prop is provided', async () => {
    page.root.closeable = true;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should render when callToAction and href props are provided', async () => {
    page.root.callToAction = 'Click me';
    page.root.href = 'https://example.com';
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });
});

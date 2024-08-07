import { newSpecPage } from '@stencil/core/testing';
import { AmalitechAlert } from '../amalitech-alert';

describe('amalitech-alert', () => {
  it('renders alerts correctly', async () => {
    const page = await newSpecPage({
      components: [AmalitechAlert],
      html: '<amalitech-alert></amalitech-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('adds alerts correctly', async () => {
    const page = await newSpecPage({
      components: [AmalitechAlert],
      html: '<amalitech-alert></amalitech-alert>',
    });

    const alertData = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      message: 'Test Message',
      messageType: 'info',
      state: 'open',
    };

    window.dispatchEvent(new CustomEvent('alert:alert-notification', { detail: alertData }));
    await page.waitForChanges();

    expect(page.rootInstance.alerts).toHaveLength(1);
    expect(page.root).toMatchSnapshot();
  });
});

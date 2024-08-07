import { newSpecPage } from '@stencil/core/testing';
import { AmalitechSwitch } from '../amalitech-switch';

jest.setTimeout(30000);

describe('amalitech-switch', () => {
  it('renders with defaults', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechSwitch],
      html: '<amalitech-switch></amalitech-switch>',
    });
    expect(root).toEqualHtml(`
      <amalitech-switch size="medium" role="switch">
        <mock:shadow-root>
        <input type="checkbox" tabindex="0" class="switch size-medium">
        </mock:shadow-root>
      </amalitech-switch>
    `);
  });

  it('renders with props', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechSwitch],
      html: `<amalitech-switch disabled size="large"></amalitech-switch>`,
    });
    expect(root).toEqualHtml(`
      <amalitech-switch aria-disabled="" disabled size="large" role="switch">
        <mock:shadow-root>
        <input type="checkbox" tabindex="0" class="switch size-large" disabled>
        </mock:shadow-root>
      </amalitech-switch>
    `);
  });
});

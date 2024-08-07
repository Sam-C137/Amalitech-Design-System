import { newSpecPage } from '@stencil/core/testing';
import { AmalitechButton } from '../amalitech-button';

describe('amalitech-button', () => {
  it('renders with defaults', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechButton],
      html: '<amalitech-button></amalitech-button>',
    });
    expect(root).toEqualHtml(`
      <amalitech-button icon-position="right" size="medium" type="button" variant="default">
        <mock:shadow-root>
          <button class="icon-right medium default" type="button" role="button" aria-label="Button label" tabindex="0">
           <slot></slot>
          </button>
        </mock:shadow-root>
      </amalitech-button>
    `);
  });

  it('renders with values and the right type set for button', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechButton],
      html: `<amalitech-button variant="primary" size="large" type="submit">Some text</amalitech-button>`,
    });
    expect(root).toEqualHtml(`
      <amalitech-button variant="primary" size="large" icon-position="right" type="submit">
        <mock:shadow-root>
          <button class="icon-right large primary" type="submit" role="button" aria-label="Button label" tabindex="0">
          <slot></slot>
          </button>
        </mock:shadow-root>
        Some text
      </amalitech-button>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { AmalitechVisualPicker } from '../amalitech-visual-picker';

describe('amalitech-visual-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmalitechVisualPicker],
      html: `<amalitech-visual-picker></amalitech-visual-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <amalitech-visual-picker class="align-horizontal">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </amalitech-visual-picker>
    `);
  });

  it('renders with an item child', async () => {
    const page = await newSpecPage({
      components: [AmalitechVisualPicker],
      html: `<amalitech-visual-picker>
        <amalitech-visual-picker-item value="a" label="Alpha">
          <p>&alpha;</p>
        </amalitech-visual-picker-item>
      </amalitech-visual-picker>`,
    });

    expect(page.root).toEqualHtml(`
      <amalitech-visual-picker class="align-horizontal">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <amalitech-visual-picker-item value="a" label="Alpha">
          <p>&alpha;</p>
        </amalitech-visual-picker-item>
      </amalitech-visual-picker>
    `);
  });
});

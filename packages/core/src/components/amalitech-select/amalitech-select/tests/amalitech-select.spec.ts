import { newSpecPage } from '@stencil/core/testing';
import { AmalitechSelect } from '../amalitech-select';

describe('my-component', () => {
  it('renders with defaults', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechSelect],
      html: '<amalitech-select></amalitech-select>',
    });
    expect(root).toEqualHtml(`
    <amalitech-select aria-required="false" role="listbox" selected-style="checkmark">
        <mock:shadow-root>
          <amalitech-select-single state="single">
              <slot></slot>
          </amalitech-select-single>
        </mock:shadow-root>
    </amalitech-select>
    `);
  });

  it('renders with child elements and parameters', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechSelect],
      html: `<amalitech-select label="select an option">
              <amalitech-select-option value="1" selected>Option 1</amalitech-select-option>
            </amalitech-select>`,
    });
    expect(root).toEqualHtml(`
    <amalitech-select aria-required="false" role="listbox" aria-label="select an option" label="select an option" selected-style="checkmark">
      <mock:shadow-root>
        <amalitech-select-single label="select an option" state="single">
          <slot></slot>
        </amalitech-select-single>
      </mock:shadow-root>
      <amalitech-select-option value="1" selected="">
        Option 1
      </amalitech-select-option>
    </amalitech-select>
    `);
  });
});

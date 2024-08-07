import { newSpecPage } from '@stencil/core/testing';
import { AmalitechDockedUtilityItem } from '../amalitech-docked-utility-item';

describe('amalitech-docked-utility-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmalitechDockedUtilityItem],
      html: `<amalitech-docked-utility-item></amalitech-docked-utility-item>`,
    });
    expect(page.root).toEqualHtml(`
            <amalitech-docked-utility-item tabindex="0">
                <mock:shadow-root>
                    <slot></slot>
                </mock:shadow-root>
            </amalitech-docked-utility-item>
            `);
  });
});

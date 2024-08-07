import { newSpecPage } from '@stencil/core/testing';
import { AmalitechDockedUtilityBar } from '../amalitech-docked-utility-bar';

describe('amalitech-docked-utility-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmalitechDockedUtilityBar],
      html: `<amalitech-docked-utility-bar></amalitech-docked-utility-bar>`,
    });
    expect(page.root).toEqualHtml(`
        <amalitech-docked-utility-bar role="toolbar">
            <mock:shadow-root>
                <footer>
                <slot></slot>
                </footer>
            </mock:shadow-root>
        </amalitech-docked-utility-bar>
        `);
  });
  it('renders with items', async () => {
    const page = await newSpecPage({
      components: [AmalitechDockedUtilityBar],
      html: `<amalitech-docked-utility-bar>
                <amalitech-docked-utility-item></amalitech-docked-utility-item>
                <amalitech-docked-utility-item></amalitech-docked-utility-item>
                <amalitech-docked-utility-item></amalitech-docked-utility-item>
            </amalitech-docked-utility-bar>`,
    });
    expect(page.root).toEqualHtml(`
        <amalitech-docked-utility-bar role="toolbar">
            <mock:shadow-root>
                <footer>
                <slot></slot>
                </footer>
            </mock:shadow-root>
            <amalitech-docked-utility-item></amalitech-docked-utility-item>
            <amalitech-docked-utility-item></amalitech-docked-utility-item>
            <amalitech-docked-utility-item></amalitech-docked-utility-item>
        </amalitech-docked-utility-bar>
        `);
  });
});

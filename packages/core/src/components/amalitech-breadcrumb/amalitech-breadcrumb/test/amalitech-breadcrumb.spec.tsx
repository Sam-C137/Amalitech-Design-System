import { newSpecPage } from '@stencil/core/testing';
import { AmalitechBreadcrumb } from '../amalitech-breadcrumb';

describe('amalitech-breadcrumb', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechBreadcrumb],
      html: '<amalitech-breadcrumb></amalitech-breadcrumb>',
    });
    expect(root).toEqualHtml(`
    <amalitech-breadcrumb role="navigation" aria-label="Breadcrumb" class="is-breadcrumb">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
    </amalitech-breadcrumb>
    `);
  });
});

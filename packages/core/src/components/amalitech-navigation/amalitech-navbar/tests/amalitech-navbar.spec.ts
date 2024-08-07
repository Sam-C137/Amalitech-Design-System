import { newSpecPage } from '@stencil/core/testing';
import { AmalitechNavbar } from '../amalitech-navbar';

describe('amalitech-navbar', () => {
  it('renders with defaults', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechNavbar],
      html: '<amalitech-navbar></amalitech-navbar>',
    });
    expect(root).toEqualHtml(`
            <amalitech-navbar role="navigation">
                <mock:shadow-root>
                    <main class="layout-nav-items-center">
                      <slot name="logo">
                      </slot>
                      <section role="list">
                        <slot></slot>
                      </section>
                      <slot name="search"></slot>
                    </main>
                </mock:shadow-root>
            </amalitech-navbar>
        `);
  });

  it('renders with nav item', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechNavbar],
      html: `<amalitech-navbar>
                    <amalitech-nav-item>Home</amalitech-nav-item>
                  </amalitech-navbar>`,
    });
    expect(root).toEqualHtml(`
        <amalitech-navbar role="navigation">
          <mock:shadow-root>
            <main class="layout-nav-items-center">
              <slot name="logo">
              </slot>
            <section role="list">
              <slot></slot>
            </section>
              <slot name="search"></slot>
            </main>
          </mock:shadow-root>
          <amalitech-nav-item>Home</amalitech-nav-item>
        </amalitech-navbar>
        `);
  });
});

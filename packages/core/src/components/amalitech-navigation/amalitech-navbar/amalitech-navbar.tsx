import { Component, h, Prop, Element, Host, Listen, State } from '@stencil/core';

/**
 * This navbar component is designed to be used with child `amalitech-nav-item` components.
 *
 * @slot logo - The logo of the navbar
 * @slot search - The search bar
 */
@Component({
  tag: 'amalitech-navbar',
  styleUrl: 'amalitech-navbar.scss',
  shadow: true,
})
export class AmalitechNavbar {
  @Element() el: HTMLAmalitechNavbarElement;
  /**
   * The layout of the navbar. Defaults to `1` aka: "logo | nav | search"
   */
  @Prop() layout: 'nav-items-center' | 'nav-items-right' | 'nav-items-left' = 'nav-items-center';
  /**
   * The alignment of the mobile dropdown trigger icon. Defaults to `right`
   */
  @Prop() mobileIconAlign: 'left' | 'right' = 'right';
  @State() isMobile: boolean = window.innerWidth <= 768;

  @Listen('switch')
  handleSwitch(e: CustomEvent) {
    const items = Array.from(this.el.querySelectorAll('amalitech-nav-item'));
    items.forEach(item => {
      if (item !== e.target) {
        item.active = false;
      }
    });
  }

  componentWillLoad() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }

  disconnectedCallback() {
    window.removeEventListener('resize', () => {});
  }

  render() {
    return (
      <Host role="navigation">
        {this.isMobile ? (
          <amalitech-nav-mobile align={this.mobileIconAlign}>
            <slot name="logo" slot="logo"></slot>
            <slot></slot>
            <slot name="search" slot="search"></slot>
          </amalitech-nav-mobile>
        ) : (
          <main
            class={{
              [`layout-${this.layout}`]: true,
            }}
          >
            <slot name="logo"></slot>
            <section role="list">
              <slot></slot>
            </section>
            <slot name="search"></slot>
          </main>
        )}
      </Host>
    );
  }
}

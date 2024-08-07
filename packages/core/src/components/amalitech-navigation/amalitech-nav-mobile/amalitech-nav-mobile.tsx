import { Component, Host, State, h, Prop, Element } from '@stencil/core';
import { NavBarIcons } from 'packages/core/src/utils/svg-icons';

@Component({
  tag: 'amalitech-nav-mobile',
  styleUrl: 'amalitech-nav-mobile.scss',
  shadow: true,
})
export class AmalitechNavMobile {
  @Element() el: HTMLAmalitechNavMobileElement;
  /**
   * The alignment of the mobile dropdown trigger icon. Defaults to `left`
   */
  @Prop() align: 'left' | 'right' = 'right';
  @State() active: boolean = false;
  @State() hasSearch: boolean = false;
  @State() hasLogo: boolean = false;
  @State() toggleSearch: boolean = false;

  componentWillLoad() {
    requestAnimationFrame(() => {
      const logo = this.el.querySelector('[slot="logo"]') as HTMLSlotElement;
      const search = this.el.querySelector('[slot="search"]') as HTMLSlotElement;
      const node = search.assignedNodes();
      if (logo.assignedSlot) {
        this.hasLogo = true;
      }
      if (node.length > 0) {
        this.hasSearch = true;
      }
    });
  }

  render() {
    return (
      <Host>
        <header
          class={{
            [`align-${this.align}`]: true,
          }}
        >
          <slot name="logo"></slot>
          <span
            class={{
              [`reverse`]: this.align === 'left',
            }}
          >
            {this.hasSearch && NavBarIcons.searchIcon(() => (this.toggleSearch = !this.toggleSearch))}
            {this.toggleSearch && (
              <div class="search-bar">
                <slot name="search"></slot>
                <div onClick={() => (this.toggleSearch = !this.toggleSearch)}>{NavBarIcons.closeIcon()}</div>
              </div>
            )}
            <div class="hamburger-menu">
              <div
                class={{
                  ['menu-icon']: true,
                  ['active']: this.active,
                }}
                onClick={() => (this.active = !this.active)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </span>
        </header>
        <section
          class={{
            ['active']: this.active,
          }}
        >
          <slot></slot>
        </section>
      </Host>
    );
  }
}

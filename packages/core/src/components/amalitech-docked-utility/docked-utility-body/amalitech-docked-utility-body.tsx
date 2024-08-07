import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import { DockedUtilityIcons } from 'packages/core/src/utils/svg-icons';

/**
 * @slot logo - The logo to be displayed in the header.
 * @slot close - The close icon to be displayed in the header.
 * @slot content - The content to be displayed in the body.
 */
@Component({
  tag: 'amalitech-docked-utility-body',
  styleUrl: 'amalitech-docked-utility-body.scss',
  shadow: true,
})
export class AmalitechDockedUtilityBody {
  @Element() el: HTMLAmalitechDockedUtilityBodyElement;

  /**
   * The name attribute should match the content attribute placed on an `amalitech-docked-utility-item` element
   * to indicate that the body is associated with that item.
   */
  @Prop() name: string;

  @State() hasCloseIcon: boolean = false;

  componentWillLoad() {
    requestAnimationFrame(() => {
      const close = this.el.querySelector('[slot="close"]') as HTMLSlotElement;
      if (close && close.assignedSlot) {
        this.hasCloseIcon = true;
      }
    });
    document.addEventListener('click', this.handleClickOutside);
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.el.contains(event.target as Node)) {
      this.el.classList.remove('open');
    }
    document.querySelectorAll('amalitech-docked-utility-item').forEach(item => {
      item.classList.remove('active');
    });
  };

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    return (
      <Host aria-hidden={!this.el.classList.contains('open') ? 'true' : 'false'} aria-labelledby={this.name} role="dialog">
        <div>
          <header>
            <slot name="logo"></slot>
            <button
              type="button"
              onClick={() => {
                this.el.classList.toggle('open');
              }}
            >
              <slot name="close"></slot>
              {!this.hasCloseIcon && DockedUtilityIcons.folderIcon()}
            </button>
          </header>
          <section>
            <slot name="content"></slot>
          </section>
        </div>
      </Host>
    );
  }
}

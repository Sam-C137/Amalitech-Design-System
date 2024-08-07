import { Component, h, Host } from '@stencil/core';

/**
 * @slot - The default slot to be used with `amalitech-docked-utility-item` elements.
 */

@Component({
  tag: 'amalitech-docked-utility-bar',
  styleUrl: 'amalitech-docked-utility-bar.scss',
  shadow: true,
})
export class AmalitechDockedUtilityBar {
  render() {
    return (
      <Host role="toolbar">
        <footer>
          <slot></slot>
        </footer>
      </Host>
    );
  }
}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'amalitech-tab-panel',
  styleUrl: 'amalitech-tab-panel.scss',
  shadow: true,
})
export class AmalitechTabPanel {
  /**
   * Title of the tabPanel.
   */
  @Prop() tabName: string | null = null;

  /**
   * When true, tab cannot be activated.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Defines if tab is active.
   */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        {this.selected && (
          <div class="amalitech-tab-panel">
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}

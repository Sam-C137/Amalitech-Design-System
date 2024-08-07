import { Component, h, Prop, Event, EventEmitter, Method, Host, State, Element } from '@stencil/core';
import { ModalIcons } from '../../utils/svg-icons';

/**
 * The modal component is a custom element used to display content in a layer above the app.
 * it comes with default text for cancel and confirm buttons but can be customized with
 * @prop confirmText
 * @prop cancelText
 *
 * @part cancel-button
 * @part confirm-button
 *
 * @slot header - The header text of the modal
 * @slot - The single default slot for modal content
 */
@Component({
  tag: 'amalitech-modal',
  styleUrl: 'amalitech-modal.scss',
  shadow: true,
})
export class AmalitechModal {
  @Element() el: HTMLAmalitechModalElement;
  /**
   * Event is emmited when a user clicks on confirm button
   */
  @Event() private amalitechConfirm: EventEmitter<void>;
  /**
   * Event is emmitted when user clicks on cancel button or close button
   */
  @Event() private amalitechCancel: EventEmitter<void>;
  /**
   * Show or hide modal
   */
  @Prop({ reflect: true, mutable: true }) visible: boolean = false;
  /**
   * Whether to show the confirmation only variant
   */
  @Prop({ reflect: true }) confirmation: boolean;
  /**
   * Make the modal scrollable/full screen
   */
  @Prop({ reflect: true }) scrollable: boolean;
  /**
   * Text to show for confirmation
   */
  @Prop({ reflect: true }) confirmText: string = 'confirm';
  /**
   * Text to show for cancel
   */
  @Prop({ reflect: true }) cancelText: string = 'cancel';
  /**
   * The customization for close button
   */
  @Prop({ reflect: true }) closeButtonType: 'arms' | 'x' | 'x-rounded' | 'rounded' | 'square' = 'arms';

  @State() hasHeaderSlot: boolean;

  componentWillLoad() {
    this.hasHeaderSlot = this.el.querySelector('[slot="header"]') !== null;
  }

  /**
   * Opens the modal
   */
  @Method()
  async openModal() {
    this.visible = true;
  }

  /**
   * Closes the modal
   */
  @Method()
  async closeModal() {
    this.visible = false;
  }

  private handelConfirmClick = () => {
    this.amalitechConfirm.emit();
    this.visible = false;
  };

  private handleCancelClick = () => {
    this.amalitechCancel.emit();
    this.visible = false;
  };

  private setVisibleToFalse = () => {
    this.visible = false;
  };

  render() {
    const { scrollable, confirmText, cancelText, confirmation, visible } = this;
    let closeButton: any;
    switch (this.closeButtonType) {
      case 'arms':
        closeButton = ModalIcons.armsCloseIcon();
        break;
      case 'x-rounded':
        closeButton = ModalIcons.xRoundedIcon();
        break;
      case 'x':
        closeButton = ModalIcons.xIcon();
        break;
      case 'rounded':
        closeButton = ModalIcons.roundedIcon();
        break;
      case 'square':
        closeButton = ModalIcons.squareIcon();
        break;
      default:
        closeButton = ModalIcons.armsCloseIcon();
        break;
    }

    return (
      <Host role="dialog" aria-modal="true">
        <div
          class={{
            [`backdrop`]: true,
            [`is-visible`]: visible,
          }}
          onClick={this.setVisibleToFalse}
        ></div>
        <div
          class={{
            [`modal`]: true,
            [`scrollable`]: scrollable !== undefined,
            [`is-visible`]: visible,
            [`confirmation-variant`]: confirmation,
            [`basic-variant`]: !confirmation,
          }}
        >
          <header
            class={{
              [`lacks-header`]: !this.hasHeaderSlot,
            }}
          >
            <slot name="header"></slot>
            <span tabIndex={this.visible ? 0 : -1} onClick={this.handleCancelClick}>{closeButton}</span>
          </header>
          <div class="details">
            <slot></slot>
          </div>
          <div class="buttons-container">
            {!confirmation && (
              <button type="button" class="cancel-button" part="cancel-button" onClick={this.handleCancelClick}>
                {cancelText}
              </button>
            )}
            <button type="button" class="confirm-button" part="confirm-button" onClick={this.handelConfirmClick}>
              {confirmText}
            </button>
          </div>
        </div>
      </Host>
    );
  }
}

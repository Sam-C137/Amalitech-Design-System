import { newSpecPage } from '@stencil/core/testing';
import { AmalitechValidation } from '../amalitech-validation';

jest.setTimeout(30000);

describe('amalitech-validation', () => {
  it('renders with defaults', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechValidation],
      html: '<amalitech-validation></amalitech-validation>',
    });
    expect(root).toEqualHtml(`
      <amalitech-validation variant="error" close-button-type="arms" role="alert" aria-live="assertive" aria-atomic="true">
        <mock:shadow-root>
          <main class="error feedback-none">
          <button title="Close" type="button" tabindex="0">
            <svg width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8883d394=""><path d="M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.4958 7.34913 19.4408 4.80805 17.5664 2.93361C15.692 1.05916 13.1509 0.00423124 10.5 0ZM13.86 12.3C13.9995 12.4411 14.0777 12.6316 14.0777 12.83C14.0777 13.0284 13.9995 13.2189 13.86 13.36C13.7905 13.4298 13.7079 13.4852 13.617 13.5229C13.526 13.5607 13.4285 13.5802 13.33 13.5802C13.2315 13.5802 13.134 13.5607 13.043 13.5229C12.9521 13.4852 12.8695 13.4298 12.8 13.36L10.5 11.06L8.2 13.36C8.13051 13.4298 8.04791 13.4852 7.95696 13.5229C7.86601 13.5607 7.76849 13.5802 7.67 13.5802C7.57152 13.5802 7.474 13.5607 7.38305 13.5229C7.2921 13.4852 7.2095 13.4298 7.14 13.36C7.00052 13.2189 6.9223 13.0284 6.9223 12.83C6.9223 12.6316 7.00052 12.4411 7.14 12.3L9.44 10L7.14 7.7C7.00752 7.55783 6.9354 7.36978 6.93883 7.17548C6.94226 6.98118 7.02097 6.79579 7.15838 6.65838C7.2958 6.52097 7.48118 6.44225 7.67548 6.43883C7.86978 6.4354 8.05783 6.50752 8.2 6.64L10.5 8.94L12.8 6.64C12.9422 6.50752 13.1302 6.4354 13.3245 6.43883C13.5188 6.44225 13.7042 6.52097 13.8416 6.65838C13.979 6.79579 14.0578 6.98118 14.0612 7.17548C14.0646 7.36978 13.9925 7.55783 13.86 7.7L11.56 10L13.86 12.3Z" fill="#D14342" data-v-8883d394=""></path></svg>
          </button>
          <div class="messages">
            <slot name="message"></slot>
            <slot name="detail"></slot>
          </div>
          </main>
        </mock:shadow-root>
      </amalitech-validation>
    `);
  });

  it('renders with slots and the right attributes', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechValidation],
      html: `<amalitech-validation transition="opacity">
                <span slot="message">Cannot log in</span>
                <span slot="detail">Email is required</span>
            </amalitech-validation>`,
    });
    expect(root).toEqualHtml(`
    <amalitech-validation transition="opacity" variant="error" close-button-type="arms" role="alert" aria-live="assertive" aria-atomic="true">
        <mock:shadow-root>
            <main class="error feedback-opacity display-closed">
            <button title="Close" type="button" tabindex="0">
                <svg width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8883d394=""><path d="M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.4958 7.34913 19.4408 4.80805 17.5664 2.93361C15.692 1.05916 13.1509 0.00423124 10.5 0ZM13.86 12.3C13.9995 12.4411 14.0777 12.6316 14.0777 12.83C14.0777 13.0284 13.9995 13.2189 13.86 13.36C13.7905 13.4298 13.7079 13.4852 13.617 13.5229C13.526 13.5607 13.4285 13.5802 13.33 13.5802C13.2315 13.5802 13.134 13.5607 13.043 13.5229C12.9521 13.4852 12.8695 13.4298 12.8 13.36L10.5 11.06L8.2 13.36C8.13051 13.4298 8.04791 13.4852 7.95696 13.5229C7.86601 13.5607 7.76849 13.5802 7.67 13.5802C7.57152 13.5802 7.474 13.5607 7.38305 13.5229C7.2921 13.4852 7.2095 13.4298 7.14 13.36C7.00052 13.2189 6.9223 13.0284 6.9223 12.83C6.9223 12.6316 7.00052 12.4411 7.14 12.3L9.44 10L7.14 7.7C7.00752 7.55783 6.9354 7.36978 6.93883 7.17548C6.94226 6.98118 7.02097 6.79579 7.15838 6.65838C7.2958 6.52097 7.48118 6.44225 7.67548 6.43883C7.86978 6.4354 8.05783 6.50752 8.2 6.64L10.5 8.94L12.8 6.64C12.9422 6.50752 13.1302 6.4354 13.3245 6.43883C13.5188 6.44225 13.7042 6.52097 13.8416 6.65838C13.979 6.79579 14.0578 6.98118 14.0612 7.17548C14.0646 7.36978 13.9925 7.55783 13.86 7.7L11.56 10L13.86 12.3Z" fill="#D14342" data-v-8883d394=""></path></svg>
            </button>
            <div class="messages">
                <slot name="message"></slot>
                <slot name="detail"></slot>
            </div>
            </main>
        </mock:shadow-root>
        <span slot="message">Cannot log in</span>
        <span slot="detail">Email is required</span>
    </amalitech-validation>
    `);
  });
});

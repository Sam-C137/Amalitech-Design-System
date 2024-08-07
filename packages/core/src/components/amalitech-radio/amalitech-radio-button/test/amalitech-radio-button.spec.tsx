import { newSpecPage } from '@stencil/core/testing';
import { AmalitechRadioButton } from '../amalitech-radio-button';

describe('amalitech-radio-button', () => {
  it('should render correctly', async () => {
    const page = await newSpecPage({
      components: [AmalitechRadioButton],
      html: `<amalitech-radio-button value="amalitech-rb-0"></amalitech-radio-button>`,
    });

    expect(page.root).toEqualHtml(`
      <amalitech-radio-button value="amalitech-rb-0">
        <mock:shadow-root>
          <div class="amalitech-element amalitech-element-flex">
            <div class="amalitech-radiobutton amalitech-component" role="radio">
              <div class="amalitech-hidden-accessible">
                <input type="radio"  value="amalitech-rb-0" id="amalitech-rb-0" name="amalitech-rb-0" aria-checked="false" tabindex="0">
              </div>
              <span>
                <div class="amalitech-radiobutton-box">
                  <span class="amalitech-radiobutton-icon"></span>
                </div>
              </span>
            </div>
            <label class="amalitech-radiobutton-label"> </label>
          </div>
        </mock:shadow-root>
      </amalitech-radio-button>
    `);
  });
});

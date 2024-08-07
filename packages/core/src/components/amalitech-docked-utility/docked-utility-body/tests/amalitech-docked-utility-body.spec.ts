import { newSpecPage } from '@stencil/core/testing';
import { AmalitechDockedUtilityBody } from '../amalitech-docked-utility-body';

describe('amalitech-docked-utility-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmalitechDockedUtilityBody],
      html: `<amalitech-docked-utility-body></amalitech-docked-utility-body>`,
    });
    expect(page.root).toEqualHtml(`
        <amalitech-docked-utility-body aria-hidden="true" role="dialog">
            <mock:shadow-root>
                <div>
                    <header>
                        <slot name="logo"></slot>
                        <button type="button">
                            <slot name="close"></slot>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
                                stroke="#292D32"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                ></path>
                                <path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </header>
                    <section>
                        <slot name="content"></slot>
                    </section>
                </div>
            </mock:shadow-root>
        </amalitech-docked-utility-body>
        `);
  });
});

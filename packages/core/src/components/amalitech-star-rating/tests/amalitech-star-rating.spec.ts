import { newSpecPage } from '@stencil/core/testing';
import { AmalitechStarRating } from '../amalitech-star-rating';

describe('amalitech-star-rating', () => {
  it('renders to match html', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechStarRating],
      html: '<amalitech-star-rating></amalitech-star-rating>',
    });
    expect(root).toEqualHtml(`
                <amalitech-star-rating role="img" aria-label="Rating: 0 out of 5 stars">
                    <mock:shadow-root>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                        <path
                            fill="#fff"
                            stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                        ></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                        <path
                            fill="#fff"
                            stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                        ></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                        <path
                            fill="#fff"
                            stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                        ></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                        <path
                            fill="#fff"
                            stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                        ></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                        <path
                            fill="#fff"
                            stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                        ></path>
                        </svg>
                    </mock:shadow-root>
                </amalitech-star-rating>
            `);
  });
  it('renders with value', async () => {
    const { root } = await newSpecPage({
      components: [AmalitechStarRating],
      html: '<amalitech-star-rating value="3"></amalitech-star-rating>',
    });
    expect(root).toEqualHtml(`
        <amalitech-star-rating value="3" role="img" aria-label="Rating: 3 out of 5 stars">
            <mock:shadow-root>
                <svg class="active" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" tabindex="0">
                <path
                    fill="#fff"
                    stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                ></path>
                </svg>
                <svg class="active" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" tabindex="0">
                <path
                    fill="#fff"
                    stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                ></path>
                </svg>
                <svg class="active" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" tabindex="0">
                <path
                    fill="#fff"
                    stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                ></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                <path
                    fill="#fff"
                    stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                ></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="" tabindex="0">
                <path
                    fill="#fff"
                    stroke="hsl(228.39999999999998, 17.9%, 33.9%)"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                ></path>
                </svg>
            </mock:shadow-root>
        </amalitech-star-rating>`);
  });
});

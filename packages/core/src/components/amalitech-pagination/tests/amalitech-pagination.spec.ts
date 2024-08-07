import { newSpecPage } from '@stencil/core/testing';
import { AmalitechPagination } from '../amalitech-pagination';

describe('amalitech-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmalitechPagination],
      html: `<amalitech-pagination></amalitech-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <amalitech-pagination>
        <mock:shadow-root>
            <ul class="size-medium" role="list">
                <li tabindex="0" aria-label="Previous">
                <span
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path
                        fill="#8F95B2"
                        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6"
                    ></path></svg
                ></span>
                </li>
                <li role="link" aria-current="page" aria-label="Page 1" tabindex="0" class="active"><span>1</span></li>
                <li role="link" aria-label="Page 2" tabindex="0" class=""><span>2</span></li>
                <li role="link" aria-label="Page 3" tabindex="0" class=""><span>3</span></li>
                <li role="link" aria-label="Page 4" tabindex="0" class=""><span>4</span></li>
                <li role="link" aria-label="Page 5" tabindex="0" class=""><span>5</span></li>
                <li role="link" aria-label="Page  ..." tabindex="0" class=""><span> ...</span></li>
                <li role="link" aria-label="Page 10" tabindex="0" class=""><span>10</span></li>
                <li tabindex="0" aria-label="Next">
                <span
                    ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path
                        fill="#8F95B2"
                        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4"
                    ></path></svg
                ></span>
                </li>
            </ul>
        </mock:shadow-root>
      </amalitech-pagination>
    `);
  });
});

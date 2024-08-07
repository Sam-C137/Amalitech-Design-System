import { newSpecPage } from '@stencil/core/testing';
import { AmalitechProgressRing } from '../amalitech-progress-ring';

describe('amalitech-progress-ring', () => {
  it('renders with defaults', async () => {
    const page = await newSpecPage({
      components: [AmalitechProgressRing],
      html: `<amalitech-progress-ring></amalitech-progress-ring>`,
    });
    expect(page.root).toEqualHtml(`
      <amalitech-progress-ring role="progressbar" aria-labelledby="progressring" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
        <mock:shadow-root>
          <svg height="112" width="112">
            <circle stroke="hsl(230.79999999999995, 20%, 87.3%)" class="outline" fill="transparent" stroke-width="6" r="44" cx="56" cy="56"></circle>
            <circle class="progress" cx="56" cy="56" fill="transparent" r="44" stroke="hsl(16.19999999999999, 72.7%, 51.2%)" stroke-dasharray="276.46015351590177 276.46015351590177" stroke-width="6" style="stroke-dashoffset: 276.46015351590177;"></circle>
            <text x="50%" y="55%" text-anchor="middle">0%</text>
          </svg>
        </mock:shadow-root>
      </amalitech-progress-ring>
    `);
  });
  it('renders with props', async () => {
    const page = await newSpecPage({
      components: [AmalitechProgressRing],
      html: `<amalitech-progress-ring progress="15" radius="70" stroke="6" progress-color="gold" outline-color="#d8dae5"></amalitech-progress-ring>`,
    });
    expect(page.root).toEqualHtml(`
      <amalitech-progress-ring progress="15" radius="70" stroke="6" progress-color="gold" outline-color="#d8dae5" role="progressbar" aria-labelledby="progressring" aria-valuemin="0" aria-valuemax="100" aria-valuenow="15">
        <mock:shadow-root>
        <svg height="140" width="140">
          <circle stroke="#d8dae5" class="outline" fill="transparent" stroke-width="6" r="58" cx="70" cy="70"></circle>
          <circle
            stroke="gold"
            class="progress"
            fill="transparent"
            stroke-width="6"
            stroke-dasharray="364.424747816416 364.424747816416"
            r="58"
            cx="70"
            cy="70"
            style="stroke-dashoffset: 309.7610356439536;"
          ></circle>
          <text x="50%" y="55%" text-anchor="middle">15%</text>
        </svg>  
        </mock:shadow-root>
      </amalitech-progress-ring>
    `);
  });
});

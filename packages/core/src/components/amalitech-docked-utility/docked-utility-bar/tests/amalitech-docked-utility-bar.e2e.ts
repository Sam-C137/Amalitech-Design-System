import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-docked-utility-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-docked-utility-bar></amalitech-docked-utility-bar>');

    const element = await page.find('amalitech-docked-utility-bar');
    expect(element).toHaveClass('hydrated');
  });
  it('triggers open an item', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <amalitech-docked-utility-bar> 
        <amalitech-docked-utility-item content="item1"> Item 1 </amalitech-docked-utility-item>
    </amalitech-docked-utility-bar>
    <amalitech-docked-utility-body name="item1">
        <div slot="logo">Item 1</div>
        <div slot="content">
          <p>Content for item 1</p>
        </div>
    </amalitech-docked-utility-body>
    `);

    const element = await page.find('amalitech-docked-utility-bar');
    const item = await element.find('amalitech-docked-utility-item');
    const body = await page.find('amalitech-docked-utility-body');

    expect(body).not.toHaveClass('open');

    await item.click();
    await page.waitForChanges();

    expect(body).toHaveClass('open');
  });
});

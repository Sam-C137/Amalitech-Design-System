import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-visual-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-visual-picker></amalitech-visual-picker>');

    const element = await page.find('amalitech-visual-picker');
    expect(element).toHaveClass('hydrated');
  });

  it('selects and deselects an item', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <amalitech-visual-picker>
      <amalitech-visual-picker-item value="a" label="Alpha">
        <p>&alpha;</p>
      </amalitech-visual-picker-item>
    </amalitech-visual-picker>
    `);
    const component = await page.find('amalitech-visual-picker');
    const item = await page.find('amalitech-visual-picker-item');

    const changeEvent = await component.spyOnEvent('pickerChange');

    await item.click();
    await page.waitForChanges();

    expect(changeEvent).toHaveReceivedEventDetail({ value: ['a'] });

    await item.click();
    await page.waitForChanges();

    expect(changeEvent).toHaveReceivedEventDetail({ value: [] });
  });
});

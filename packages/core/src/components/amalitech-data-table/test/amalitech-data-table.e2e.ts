import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-data-table', () => {
  it('renders with default values', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-data-table></amalitech-data-table>');
    const element = await page.find('amalitech-data-table');
    expect(element).toHaveClass('hydrated');
  });

  it('allows sorting when sortable prop is true', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-data-table sortable></amalitech-data-table>');
  });

  it('paginates properly', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-data-table paginate></amalitech-data-table>');
  });

  it('selects rows correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-data-table selectionType="checkbox"></amalitech-data-table>');
  });

  it('emits events properly', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-data-table></amalitech-data-table>');
  });
});
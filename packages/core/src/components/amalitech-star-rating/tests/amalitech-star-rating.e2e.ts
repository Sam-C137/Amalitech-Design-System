import { newE2EPage } from '@stencil/core/testing';

describe('amalitech-star-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-star-rating></amalitech-star-rating>');

    const element = await page.find('amalitech-star-rating');
    expect(element).toHaveClass('hydrated');
  });

  it('rates', async () => {
    const page = await newE2EPage();
    await page.setContent('<amalitech-star-rating></amalitech-star-rating>');
    const element = await page.find('amalitech-star-rating');
    const changeEvent = await element.spyOnEvent('amalitechRatingChange');
    const star = await page.find('amalitech-star-rating >>> svg');

    await star.click();
    await page.waitForChanges();

    expect(changeEvent).toHaveReceivedEventDetail(1);
  });
});

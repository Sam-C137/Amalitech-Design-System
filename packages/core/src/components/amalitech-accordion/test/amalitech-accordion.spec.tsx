import { newSpecPage } from '@stencil/core/testing';
import { AmalitechAccordion } from '../amalitech-accordion';

describe('amalitech-accordion', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [AmalitechAccordion],
      html: '<amalitech-accordion></amalitech-accordion>',
    });
  });
});

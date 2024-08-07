import { newSpecPage } from '@stencil/core/testing';
import { AmalitechCard } from '../amalitech-card';

jest.setTimeout(40000); // added to prevent timeout error

describe('amalitech-card', () => {
  it('renders', async () => {
    await newSpecPage({
      components: [AmalitechCard],
      html: `<amalitech-card></amalitech-card>`,
    });
  });

  it('renders a card without href', async () => {
    const page = await newSpecPage({
      components: [AmalitechCard],
      html: `<amalitech-card></amalitech-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a clickable card with href', async () => {
    const page = await newSpecPage({
      components: [AmalitechCard],
      html: `<amalitech-card href="https://example.com"></amalitech-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders a disabled card', async () => {
    const page = await newSpecPage({
      components: [AmalitechCard],
      html: `<amalitech-card disabled></amalitech-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders card with header slot', async () => {
    const page = await newSpecPage({
      components: [AmalitechCard],
      html: `<amalitech-card><div slot="header">Header Content</div></amalitech-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});

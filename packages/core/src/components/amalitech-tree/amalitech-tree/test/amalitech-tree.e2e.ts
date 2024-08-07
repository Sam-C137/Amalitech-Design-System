import { newSpecPage } from '@stencil/core/testing';
import { AmalitechTree } from '../amalitech-tree';

describe('AmalitechTree', () => {
  it('renders empty state when empty prop is true', async () => {
    const page = await newSpecPage({
      components: [AmalitechTree],
      html: '<amalitech-tree empty></amalitech-tree>'
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders tree nodes when empty prop is false', async () => {
    const page = await newSpecPage({
      components: [AmalitechTree],
      html: '<amalitech-tree><amalitech-tree-node>Node 1</amalitech-tree-node></amalitech-tree>'
    });
    expect(page.root).toMatchSnapshot();
  });
});

const svgtojsx = require('svg-to-jsx');
const { kebabCase, PascalCase, fileName } = require('./helpers.js');

const BUILD = {};

BUILD.E2E = async (fileData, options) => {
  const file = `import { newE2EPage } from '@stencil/core/testing';

    describe('icon-${kebabCase(fileName(fileData.name))}', () => {
        it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<${options.prefix ? options.prefix : 'icon-'}${kebabCase(fileName(fileData.name))}></${options.prefix ? options.prefix : 'icon-'}${kebabCase(
    fileName(fileData.name),
  )}>');
    
        const element = await page.find('${options.prefix ? options.prefix : 'icon-'}${kebabCase(fileName(fileData.name))}');
        expect(element).toHaveClass('hydrated');
        });
    });
`;
  return file;
};

BUILD.CSS = async (fileData, options) => {
  const isBold = fileData.name.includes('bold');
  const isTwoTone = fileData.name.includes('two-tone');
  const isBulkTwoTone = fileData.name.includes('bulk-two-tone');
  const isLinear = !isBold && !isBulkTwoTone;

  const file = `:host {
    display: block;
    width: var(--${fileData.name}-icon-width,24px);
    height: var(--${fileData.name}-icon-height,24px);
}
 ${
   isLinear || isTwoTone
     ? `svg path{
    stroke: var(--${fileData.name}-icon-color, #000);
}`
     : `svg path{
  fill: var(--${fileData.name}-icon-color, #000);
}`
 }
`;
  return file;
};

BUILD.TSX = async (fileData, options) => {
  return await svgtojsx(fileData.data).then(function (jsx) {
    const currentFileName = `${options.prefix ? options.prefix : 'icon-'}${kebabCase(fileName(fileData.name))}`;
    const file = `import { Component, Element, h, Host, Prop } from '@stencil/core';
    
@Component({
  tag: '${currentFileName}',
  styleUrl: '${kebabCase(fileName(fileData.name))}.css',
  shadow: true
})


export class ${PascalCase(currentFileName)} {
  /**
   * The width of the svg
   */
  @Prop() width: number = 24;
  /**
   * The height of the svg
   */
  @Prop() height: number = this.width;
  /**
   * The color of the svg
   */
  @Prop() iconColor: string;

  // eslint-disable-next-line @stencil-community/element-type
  @Element() IconElement: HTML${PascalCase(currentFileName)}Element;

    private SvgIcon: SVGSVGElement;

    componentDidLoad(){
        this.SvgIcon = this.IconElement.shadowRoot?.querySelector('svg') as SVGSVGElement;
        if(Boolean(this.iconColor)){
          this.SvgIcon.style.setProperty('--${fileData.name}-icon-color', this.iconColor);
        }
        if(Boolean(this.width)){
          this.SvgIcon.style.setProperty('--${fileData.name}-icon-width', String(this.width));
        }
        if(Boolean(this.height)){
          this.SvgIcon.style.setProperty('--${fileData.name}-icon-height', String(this.height));
        }
    }
    
    render() {
    return (
        <Host>
            ${fileData.data}
        </Host>);
  }
}
`;
    return file;
  });
};

module.exports = BUILD;

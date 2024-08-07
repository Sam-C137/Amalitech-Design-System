import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'amalitech-design-system',
  globalStyle: './src/global/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: './doc/docs.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'html', dest: './' }],
    },
    angularOutputTarget({
      componentCorePackage: '@amalitech-design-system/core',
      directivesProxyFile: '../../packages/angular/libs/ads-angular-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../../packages/angular/libs/ads-angular-wrapper/src/lib/index.ts',
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['./src/global/variables.css', './src/global/variables.scss'],
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};

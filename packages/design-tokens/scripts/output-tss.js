import camelCase from 'lodash/camelCase.js';
import prettier from 'prettier';
import { COLOR, SHADOW, TYPE_VARIANT } from '../src/amalitech/tokens.js';
import { processValue } from './output-css.js';

const prettierOptions = {
  singleQuote: true,
  trailingComma: 'es5',
  parser: 'babel',
};
const fontKeyPropMap = {
  family: 'fontFamily',
  size: 'fontSize',
  weight: 'fontWeight',
  lineHeight: 'lineHeight',
  letterSpacing: 'letterSpacing',
};

const TSS = {};

export const outputTSS = {
  onCategory: ({ categoryName }) => {
    TSS[camelCase(categoryName)] = {};
  },
  onSection: ({ categoryName, sectionName }) => {
    if (sectionName !== 'DEFAULT') {
      TSS[camelCase(categoryName)][camelCase(sectionName)] = {};
    }
  },
  onValue: ({ categoryName, sectionName, key, value }) => {
    const camelCasedKey = camelCase(key);
    const val = processValue([categoryName, sectionName], key, value);
    const section =
      sectionName === 'DEFAULT'
        ? TSS[camelCase(categoryName)]
        : TSS[camelCase(categoryName)][camelCase(sectionName)];

    if (categoryName === COLOR) {
      section[camelCasedKey] = val.hsl().toString();
      return;
    }
    if (categoryName === TYPE_VARIANT) {
      section[fontKeyPropMap[key]] = val;
      return;
    }
    // Special shape for shadows
    if (categoryName === SHADOW) {
      if (key.length === 1) {
        section[camelCasedKey] = section[camelCasedKey] || {};
        section[camelCasedKey].standard = val;
      } else {
        const intKey = camelCasedKey.charAt(0);
        const state = camelCasedKey.slice(1).toLowerCase();
        section[intKey] = section[intKey] || {};
        section[intKey][state] = val;
      }
      return;
    }
    section[camelCasedKey] = val;
  },
  onComplete: () => {
    let output = '';
    for (const [name, props] of Object.entries(TSS)) {
      output = output.concat(
        `\n\nexport const ${name}: Record<string, any> = ${JSON.stringify(
          props
        )};`
      );
    }
    outputTSS.content = prettier.format(output, prettierOptions);
  },
  filename: `design-tokens${process.env.WHITELABEL ? '' : '-amalitech'}`,
  ext: '.ts',
  suffix: '',
  content: null,
};

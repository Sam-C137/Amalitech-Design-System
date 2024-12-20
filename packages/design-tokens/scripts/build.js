#!/usr/bin/env node

/**
 * Creating an output target
 * -------------------------
 * An output target is a plain object with 4 methods and 4 props. The callbacks
 * will fire as the tokens tree is being traversed, so you can build the contents
 * of the output file accordingly. It has the following signature:
 *
 * - filename (string) the name of the generated file
 * - ext (string) is the extension of the output file, eg. .css
 * - suffix (string) optional if present, will be appended to the filename
 * - content (string) the actual content of the file
 *
 * ```js
 *   export const target = {
 *     onCategory: ({ categoryName, tokens }) => {},
 *     onSection: ({ categoryName, sectionName, tokens }) => {},
 *     onValue: ({ categoryName, sectionName, key, value, tokens }) => {},
 *     onComplete: () => {},
 *     filename: 'design-tokens-amalitech',
 *     ext: '',
 *     suffix: '',
 *     content: null,
 *   };
 * ```
 */

import { join } from "path";
import fs from "fs-extra";
import each from "lodash/each.js";

import { outputCSS } from "./output-css.js";
import { outputJSS } from "./output-jss.js";
import { outputTSS } from "./output-tss.js";

const isWhitelabel = !!process.env.WHITELABEL;
const DEFAULT_FILENAME = `design-tokens${isWhitelabel ? "" : "-amalitech"}`;
const OUTPUT_PATH = "./dist";

main();

async function main() {
  const { default: getTokens } = await import(isWhitelabel ? "../src/tokens.js" : "../src/amalitech/tokens.js");

  const tokens = getTokens();
  await fs.emptyDir(OUTPUT_PATH);
  await fs.mkdirp(OUTPUT_PATH);

  const outputs = [outputCSS, outputJSS, outputTSS];

  try {
    // Loop through categories (level 1)
    each(tokens, (section, categoryName) => {
      outputs.forEach(({ onCategory }) => {
        onCategory({ categoryName, tokens });
      });

      // Loop through sections (level 2)
      each(section, (values, sectionName) => {
        if (values == null) {
          return;
        }

        outputs.forEach(({ onSection }) => {
          onSection({ categoryName, sectionName, tokens });
        });

        // Loop through values (level 3)
        each(values, (value, key) => {
          outputs.forEach(({ onValue }) => {
            onValue({ categoryName, sectionName, key, value, tokens });
          });
        });
      });
    });

    outputs.forEach(({ onComplete }) => onComplete());

    // Write a file for each output
    await Promise.all(outputs.map(write));

    async function write({ filename = DEFAULT_FILENAME, ext = "", suffix = "", content }) {
      await fs.writeFile(join(OUTPUT_PATH, `${filename}${suffix}${ext}`), content);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

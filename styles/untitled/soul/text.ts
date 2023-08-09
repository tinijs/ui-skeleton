import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateFontTypeVaries,
  generateFontSizeVaries,
} from '@tinijs/core';

export const textStyle = css`
  :host {
    /* ...  */
  }

  /*
   * Main
   */

  .text {
    /* ...  */
  }

  /*
   * color="..."
   */

  ${generateColorVaries(
    ({name, color}) => `
    .color-${name} {
      /* ...  */
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient}) => `
    .color-gradient-${name} {
      /* ...  */
    }
  `
  )}

  /*
   * font="..."
   */

  ${generateFontTypeVaries(
    fontType => `
    :host([font="${fontType}"]),
    .font-${fontType} {
      /* ...  */
    }
  `
  )}

  /*
   * size="..."
   */

  ${generateFontSizeVaries(
    sizeFactor => `
    .size-${sizeFactor} {
      /* ...  */
    }
  `
  )}
`;

export function textScript(host: HTMLElement) {}

export function textUnscript(host: HTMLElement) {}

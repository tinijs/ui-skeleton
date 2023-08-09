import {css} from 'lit';
import {generateColorVaries, generateGradientVaries} from '@tinijs/core';

export const boxStyle = css`
  :host {
    /* ...  */
  }

  /*
   * Main
   */

  .box {
    /* ...  */
  }

  /*
   * background="..."
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      /* ...  */
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, contrast}) => `
    .bg-gradient-${name} {
      /* ...  */
    }
  `
  )}
`;

export function boxScript(host: HTMLElement) {}

export function boxUnscript(host: HTMLElement) {}

import {css} from 'lit';
import {generateColorVaries, generateGradientVaries} from '@tinijs/core';

export const linkStyle = css`
  :host {
    /* ...  */
  }

  /*
   * Main
   */

  a {
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
`;

export function linkScript(host: HTMLElement) {}

export function linkUnscript(host: HTMLElement) {}

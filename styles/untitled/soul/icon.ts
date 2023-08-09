import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
} from '@tinijs/core';

export const iconStyle = css`
  :host {
    /* ...  */
  }

  /*
   * Main
   */

  i {
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
   * size="..."
   */

  ${generateSizeVaries(
    size => `
    .size-${size} {
      /* ...  */
    }
  `
  )}
`;

export function iconScript(host: HTMLElement) {}

export function iconUnscript(host: HTMLElement) {}

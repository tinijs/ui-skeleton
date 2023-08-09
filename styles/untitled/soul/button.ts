import {css} from 'lit';
import {
  generateColorVaries,
  generateGradientVaries,
  generateSizeVaries,
  generateJustifyVaries,
} from '@tinijs/core';

export const buttonStyle = css`
  :host {
    /* ...  */
  }

  /*
   * Main
   */

  button {
    /* ...  */
  }

  /*
   * color="..."
   */

  ${generateColorVaries(
    ({name, color, contrast}) => `
    .bg-${name} {
      /* ...  */
    }
  `
  )}

  ${generateGradientVaries(
    ({name, gradient, color, contrast}) => `
    .bg-gradient-${name} {
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



  /*
   * justify="..."
   */

  ${generateJustifyVaries(
    justify => `
    .justify-${justify} {
      /* ...  */
    }
  `
  )}
`;

export function buttonScript(host: HTMLElement) {}

export function buttonUnscript(host: HTMLElement) {}

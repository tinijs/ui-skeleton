import {Page, TiniComponent, html, stylingWithBases} from '@tinijs/core';
import {commonBases, headingsBases, linkBases, textBases} from '@tinijs/ui';

@Page({
  name: 'app-page-home',
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageHome extends TiniComponent {
  protected render() {
    return html`
      <h1>Home</h1>
      <p>Lorem ipsum ...</p>
    `;
  }
}

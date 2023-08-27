import {html} from 'lit';
import {Page, TiniComponent, stylingWithBases} from '@tinijs/core';
import {AppIconPageComponent} from '@tinijs/ui-common/app/components/icon-page';
import {
  commonBases,
  headingsBases,
  linkBases,
  textBases,
} from '@tinijs/ui/bases';

@Page({
  name: 'app-page-icons-tinix',
  components: [AppIconPageComponent],
  theming: {
    styling: stylingWithBases([
      commonBases,
      headingsBases,
      linkBases,
      textBases,
    ]),
  },
})
export class AppPageIconsTinix extends TiniComponent {
  protected render() {
    return html`
      <app-icon-page
        titleText="Tinix Icons"
        name="tinix"
        packageName="tinix-icons"
      ></app-icon-page>
    `;
  }
}

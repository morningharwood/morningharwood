import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HtmlThemeService {
  // TODO (mharwood) figure out how to ignore this line for domino to pass.
  // constructor(@Inject(DOCUMENT) private document: Document) {
  // }

  public setTheme() {
    // for (const [ key, value ] of Object.entries(redTheme.properties)) {
    //   this.document.documentElement.style.setProperty(key, value);
    // }
  }
}

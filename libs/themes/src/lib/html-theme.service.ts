import {
  Inject,
  Injectable,
  PLATFORM_ID
} from '@angular/core';
import {
  DOCUMENT,
  isPlatformBrowser
} from '@angular/common';
import { redTheme } from './night-owl/theme';


@Injectable({
  providedIn: 'root'
})
export class HtmlThemeService {

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              @Inject(DOCUMENT) private document: Document) {
  }

  public setTheme() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    for (const [ key, value ] of Object.entries(redTheme.properties)) {
      this.document.documentElement.style.setProperty(key, value);
    }
  }
}

import {
  ApplicationRef,
  Component,
  HostBinding
} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HtmlThemeService } from '../../../../libs/themes/src';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './themeable.scss',
    './app.component.scss'
  ]
})
export class AppComponent {
  @HostBinding('class.secondary') isActive = true;
  title = 'app';
  name = 'Angular 4';
  public items: any[];


  constructor(db: AngularFirestore,
              app: ApplicationRef,
              private htmlThemeService: HtmlThemeService) {
    db.collection('notes')
      .valueChanges()
      .subscribe((items) => {
        this.items = items;
        console.log(this.items);
        this.isActive = true;
        this.htmlThemeService.setTheme();
        app.tick();
      });
  }
}

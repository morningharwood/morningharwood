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
  @HostBinding('class.secondary') isActive = false;
  public items: any[];


  constructor(db: AngularFirestore,
              app: ApplicationRef) {
    db.collection('notes')
      .valueChanges()
      .subscribe((items) => {
        this.items = items;
        app.tick();
      });
  }
}

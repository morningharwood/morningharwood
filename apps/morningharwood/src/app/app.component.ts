import {
  ApplicationRef,
  Component,
  ElementRef,
  HostBinding
} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { redTheme } from './themes/night-owl';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  @HostBinding('class.secondary') isActive = true;
  title = 'app';
  name = 'Angular 4';
  public items: any[];

  private _html = document.documentElement;

  constructor(db: AngularFirestore, app: ApplicationRef, private _elementRef: ElementRef) {
    console.log(this._html.style.setProperty(`--cardBackground`, 'blue'));
    db.collection('notes')
      .valueChanges()
      .subscribe((items) => {
        this.items = items;
        console.log(this.items);
        this.isActive = true;
        for (const [ key, value ] of Object.entries(redTheme.properties)) {
          this._html.style.setProperty(key, value);
        }
        app.tick();
      });
  }
}

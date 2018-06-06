import { ApplicationRef, Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Angular 4';
  public items: any[];

  constructor(db: AngularFirestore, app: ApplicationRef) {
    db.collection('notes').valueChanges().subscribe((items) => {
      this.items = items;
      console.log(this.items);
      app.tick();
    });
  }
}

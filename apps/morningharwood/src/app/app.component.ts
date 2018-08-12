import {
  ApplicationRef,
  Component,
  HostBinding,
  OnInit
} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './themeable.scss',
    './app.component.scss'
  ]
})
export class AppComponent implements OnInit {
  @HostBinding('class.secondary') isActive = false;

  private static getSchema() {
    return 'I"M A SCHEMA';
  }

  public items: any[];


  constructor(db: AngularFirestore,
              app: ApplicationRef) {
    // db.collection('notes')
    //   .valueChanges()
    //   .subscribe((items) => {
    //     this.items = items;
    //     app.tick();
    //   });
  }

  ngOnInit() {
    // // @ts-ignore
    // const allComponents = ng.probe(window.getAllAngularRootElements()[ 0 ]);
    // console.log(allComponents);
    // // @ts-ignore
    // global.allComponents = allComponents;
  }
}

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'morningharwood-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public routes: any[];
  public components: any[];
  public blocks: any[];
  public editableSchemas: any[] = [];
  public model = {};
  public form = new FormGroup({});
  public options: any = {};

  constructor(private db: AngularFirestore) {
    this.db.collection('routes')
        .valueChanges()
        .subscribe((items) => {
          this.routes = items;
        });

    this.db.collection('components')
        .valueChanges()
        .subscribe((items) => {
          this.components = items;
          console.log(this.components);
        });


  }

  public loadAllComponentSchemas(event) {
    console.log(event);
    // const query = this.db.collection('blocks', ref => ref.where('route', '==', event.route));
    this.db.collection('blocks', ref => ref.where('route', '==', event.route))
        .valueChanges()
        .subscribe(snapshot => {
          this.editableSchemas = [];
          console.log(snapshot, 'snap');
          snapshot.forEach(doc => {
            this.db.doc(doc[ 'componentRef' ])
                .valueChanges()
                .subscribe((item) => {

                  doc[ 'fields' ] = item[ 'schema' ];
                  doc[ 'model' ] = {};
                  doc[ 'options' ] = {};
                  doc[ 'form' ] = new FormGroup({});
                  this.editableSchemas.push(doc);
                });
          });
        });
  }

  public submit() {
    console.log('submit', this.editableSchemas);
  }
}

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'morningharwood-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public routes: any[];
  public components: any[];
  public editableSchemas: any[] = [];
  public model = {};
  public form = new FormGroup({});
  public options: any = {};
  public block$: Observable<{ id: string }[]>;

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
          console.log(this.components, 'components');
        });
  }

  public delete(schema) {
    console.log('cannot delete for now :(');
  }

  public loadAllComponentSchemas(event) {
    this.editableSchemas = [];
    this.block$ = this.db.collection('blocks', ref => ref.where('route', '==', event.route))
                      .snapshotChanges()
                      .pipe(
                        map(changes => {
                          return changes.map(a => {
                            const data = a.payload.doc.data();
                            const id = a.payload.doc.id;
                            data[ 'schema' ][ 'fields' ] = this.components.find(component => component[ 'docKey' ] === data[ 'componentRef' ][ 'id' ])[ 'schema' ];
                            data[ 'schema' ][ 'model' ] = {};
                            data[ 'schema' ][ 'options' ] = {};
                            data[ 'schema' ][ 'form' ] = new FormGroup({});
                            return { id, ...data };
                          });
                        }));

  }

  public submit(form) {
    console.log(form);
    this.db.collection('blocks')
        .doc(form.id)
        .set({ form: { schema: form.schema } }, { merge: true });
    // this.block$.subscribe(console.log)
  }
}

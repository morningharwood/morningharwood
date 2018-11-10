import {
  ApplicationRef,
  Component,
  HostBinding,
  OnInit
} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {
  filter,
  map,
  mergeMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';


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

  public items: any;
  private router$: Observable<any>;
  private merged$: Observable<any[]>;

  constructor(private db: AngularFirestore,
              private app: ApplicationRef,
              private router: Router) {
  }


  ngOnInit() {
    this.router$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(x => x[ 'url' ])
    );

    this.merged$ = this.router$.pipe(
      mergeMap(val => {
          const calcUrl = () => val === '/'
                                ? 'root'
                                : val;
          return this.db.collection('blocks', ref => ref.where('route', '==', calcUrl()))
                     .valueChanges();
        }
      ));

    this.merged$.subscribe(items => {
      this.items = items.map(i => i[ 'data' ]).reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
      }, {});
      console.log(this.items[ 0 ]);
      this.app.tick();
    });

  }
}

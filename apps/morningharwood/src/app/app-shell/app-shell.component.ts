import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: [ './app-shell.component.css' ]
})
export class AppShellComponent implements OnInit {
  public static getSchema() {
    return {
      title: 'hello3',
      children: [
        { 'something': 1 },
        { 'something': 2 }
      ]
    };
  }

  constructor() {
  }

  ngOnInit() {
  }

}

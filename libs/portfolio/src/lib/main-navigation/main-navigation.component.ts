import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { MainNavigationData } from './main-navigation.types';


@Component({
  selector: 'morningharwood-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: [ './main-navigation.component.scss' ]
})
export class MainNavigationComponent implements OnInit {
  @Input() data: MainNavigationData;

  private static getSchema() {
    return [
      {
        key: 'id',
        type: 'input',
        templateOptions: {
          label: 'Type a uuid'
        }
      },
      {
        key: 'items',
        type: 'repeat',
        fieldArray: {
          templateOptions: {
            btnText: 'Add Item'
          },
          fieldGroup: [
            {
              type: 'input',
              key: 'text',
              templateOptions: {
                label: 'text:',
                required: true
              }
            },
            {
              type: 'input',
              key: 'href',
              templateOptions: {
                type: 'text',
                label: 'href:'
              }
            },
            {
              type: 'input',
              key: 'target',
              templateOptions: {
                type: 'text',
                label: 'target:'
              }
            }
          ]
        }
      }
    ];
  }

  ngOnInit() {
  }

}

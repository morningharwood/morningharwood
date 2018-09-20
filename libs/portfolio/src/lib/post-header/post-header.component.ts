import {
  Component,
  Input,
  OnInit
} from '@angular/core';


@Component({
  selector: 'morningharwood-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: [ './post-header.component.scss' ]
})
export class PostHeaderComponent implements OnInit {
  @Input() eyebrow: string;
  @Input() headline: string;
  @Input() subheadline: string;

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
        key: 'eyebrow',
        type: 'input',
        templateOptions: {
          label: 'Type in an eyebrow'
        }
      },
      {
        key: 'headline',
        type: 'input',
        templateOptions: {
          label: 'Type in an headline'
        }
      },
      {
        key: 'subheadline',
        type: 'input',
        templateOptions: {
          label: 'Type in an subheadline'
        }
      }
    ];
  }

  constructor() {
  }

  ngOnInit() {

  }

}

import {
  Component,
  Input,
  OnInit
} from '@angular/core';

export interface PostHeaderComponentData {
  eyebrow: string;
  headline: string;
  subheadline: string;
}
@Component({
  selector: 'morningharwood-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: [ './post-header.component.scss' ]
})
export class PostHeaderComponent implements OnInit {
  @Input() data: PostHeaderComponentData;

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

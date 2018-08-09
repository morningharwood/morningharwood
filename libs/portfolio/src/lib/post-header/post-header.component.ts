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

  constructor() {
  }

  ngOnInit() {

  }

}

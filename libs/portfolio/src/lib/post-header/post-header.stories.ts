import {
  moduleMetadata,
  storiesOf
} from '@storybook/angular';
import { PostHeaderComponent } from './post-header.component';


storiesOf('My Button', module)
  .addDecorator(
    moduleMetadata({})
  )
  .add('with some emoji', () => ({
    component: PostHeaderComponent,
    props: {
      eyebrow: 'web application',
      headline: 'Hello Storybook',
      subheadline: 'this is a subheadline'
    }
  }));

import { storiesOf } from '@storybook/angular';
import { PostHeaderComponent } from './post-header.component';


storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: PostHeaderComponent,
    props: {
      text: '😀 😎 👍 💯'
    }
  }))
  .add('with some emoji and action', () => ({
    component: PostHeaderComponent,
    props: {
      text: '😀 😎 👍 💯'
    }
  }));

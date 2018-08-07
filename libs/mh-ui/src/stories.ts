import { storiesOf } from '@storybook/angular';

import { MyButtonComponent } from './lib/button.compoonent';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: MyButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }))
  .add('with some emoji and action', () => ({
    component: MyButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

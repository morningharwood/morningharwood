import { storiesOf } from '@storybook/angular';
import { PostHeaderComponent } from './post-header.component';
import { withBackgrounds } from '@storybook/addon-backgrounds';


storiesOf('My Button', module)
  .addDecorator(
    withBackgrounds([
      {
        name: 'nightowl',
        value: '#000C1D',
        default: true
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ])
  )
  .add('with some emoji', () => ({
    component: PostHeaderComponent,
    props: {
      eyebrow: 'web application',
      headline: 'Nike Jordan Editor',
      subheadline: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.'
    }
  }));

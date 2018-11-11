import { storiesOf } from '@storybook/angular';
import { PostHeaderComponent } from './post-header.component';
import { withBackgrounds } from '@storybook/addon-backgrounds';


storiesOf('Post Header', module)
  .addDecorator(
    withBackgrounds([
      {
        name: 'white',
        value: '#fff',
        default: true
      },
      {
        name: 'nightowl',
        value: '#000C1D'
      }
    ])
  )
  .add('with default fixture data', () => ({
    component: PostHeaderComponent,
    props: {
      data: {
        eyebrow: 'web application',
        headline: 'Nike Jordan Editor',
        subheadline: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.'
      }
    }
  }));

import { storiesOf } from '@storybook/angular';
import { MainNavigationComponent } from './main-navigation.component';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';


storiesOf('Main Navigation', module)
  .addDecorator(
    withBackgrounds([
      {
        name: 'light',
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
    component: MainNavigationComponent,
    moduleMetadata: {
      imports: [
        RouterModule.forRoot([
          {
            path: '',
            component: MainNavigationComponent
          }
        ])
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    },
    props: {
      data: {
        items: [
          {
            text: 'Work',
            href: '/work'
          },
          {
            text: 'Lab',
            href: '/lab'
          },
          {
            text: 'Profile',
            href: '/profile'
          }
        ]
      }
    }
  }));



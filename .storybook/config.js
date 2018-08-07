import { configure } from '@storybook/angular';

function loadStories() {
  require('../src/libs/mh-ui/src/stories.ts');
}

configure(loadStories, module);

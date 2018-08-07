import { configure } from '@storybook/angular';

const req = require.context('../libs', true, /.stories\.ts$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

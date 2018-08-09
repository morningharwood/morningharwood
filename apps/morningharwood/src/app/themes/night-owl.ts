interface StringHexMap {
  [ key: string ]: string;
}

export interface Theme {
  name: string;
  properties: StringHexMap;
}

export const nightOwl: Theme = {
  name: 'light',
  properties: {
    '--background': '#000C1D',
    '--on-background': '#E3F8FD',
    '--on-background-accent': '#A273D1',
    '--background-secondary': '#E3F8FD',
    '--on-background-secondary': '#102A44',
    '--primary': '#A273D1',
    '--on-primary': '#fff',
    '--secondary': '#B2B4B7',
    '--on-secondary': '#fff',
    '--surface': '#fff',
    '--on-surface': '#0F0F0F',
    '--error': '#EB5945',
    '--on-error': '#fff',
    '--warning': '#F6BB42',
    '--on-warning': '#fff'
  }
};

export const redTheme: Theme = {
  name: 'light',
  properties: {
    '--background': '#ff0000',
    '--on-background': '#E3F8FD',
    '--on-background-accent': '#A273D1',
    '--background-secondary': 'tomato',
    '--on-background-secondary': '#102A44',
    '--primary': '#A273D1',
    '--on-primary': '#fff',
    '--secondary': '#B2B4B7',
    '--on-secondary': '#fff',
    '--surface': '#fff',
    '--on-surface': '#0F0F0F',
    '--error': '#EB5945',
    '--on-error': '#fff',
    '--warning': '#F6BB42',
    '--on-warning': '#fff'
  }
};

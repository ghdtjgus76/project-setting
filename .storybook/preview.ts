import { Preview } from '@storybook/react';

const customViewports = {
  iPhone13: {
    name: 'iPhone 13',
    styles: {
      width: '390px',
      height: '844px'
    },
    type: 'mobile'
  },
  tablet: {
    name: 'iPad Pro 11',
    styles: {
      width: '834px',
      height: '1194px',
    },
    type: 'tablet',
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    paddings: {
      values: [
        { name: 'margin-template', value: '24px' },
        { name: 'none', value: '0px' },
      ],
      default: 'none',
    },
    viewport: { 
      viewports: customViewports, 
      defaultViewport: 'iPhone13'
    },
  }
};

export default preview;
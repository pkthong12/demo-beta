import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../src/app/libraries/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../src/app/demo/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
  framework: {
    "name": "@storybook/angular",
    "options": {}
  },
  staticDirs: ['../src/static']
};
export default config;
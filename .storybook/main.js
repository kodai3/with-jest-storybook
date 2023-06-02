module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', "@storybook/addon-styling"],
  framework: {
    name: '@storybook/nextjs',
    options: {
      image: {
        loading: 'eager',
        unoptimized: true,
      },
    },
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  }
};
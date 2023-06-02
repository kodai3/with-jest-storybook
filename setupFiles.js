import { decorators as nextjsDecorators } from '@storybook/nextjs/preview.js';
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './.storybook/preview';
// also not work with ↓
// import * as globalStorybookConfig from './.storybook/preview.js';


const decorators = [...nextjsDecorators, ...globalStorybookConfig.decorators];

setProjectAnnotations({
  ...globalStorybookConfig,
  decorators: decorators,
});

import { decorators as nextjsDecorators } from '@storybook/nextjs/preview.js';
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './.storybook/preview';

const decorators = [...nextjsDecorators, ...globalStorybookConfig.decorators];

setProjectAnnotations({
  ...globalStorybookConfig,
  decorators: decorators,
});

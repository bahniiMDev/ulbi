import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '#'
  }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Purple = Template.bind({});
Purple.args = {
  children: 'text'
};
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];

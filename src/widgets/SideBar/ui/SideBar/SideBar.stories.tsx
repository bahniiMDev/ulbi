import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

export default {
  title: 'widget/SideBar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = args => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Purple = Template.bind({});
Purple.args = {};
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];

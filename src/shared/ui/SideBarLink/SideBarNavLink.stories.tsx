import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBarNavLink } from './SideBarNavLink';

export default {
  title: 'widget/SideBarNavLink',
  component: SideBarNavLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '#'
  }
} as ComponentMeta<typeof SideBarNavLink>;

const Template: ComponentStory<typeof SideBarNavLink> = args => <SideBarNavLink {...args} />;

export const NavDefault = Template.bind({});
NavDefault.args = {
  children: 'text'
};

export const NavPurple = Template.bind({});
NavPurple.args = {
  children: 'text'
};
NavPurple.decorators = [ThemeDecorator(Theme.PURPLE)];

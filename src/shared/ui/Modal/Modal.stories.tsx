import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '#'
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'text',
  isOpen: true
};

export const Purple = Template.bind({});
Purple.args = {
  children: 'text',
  isOpen: true

};
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];

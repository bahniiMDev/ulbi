import React from 'react';
import { addDecorator, ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonApp, ThemeButton } from './ButtonApp';

export default {
  title: 'shared/ButtonApp',
  component: ButtonApp,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ButtonApp>;

const Template: ComponentStory<typeof ButtonApp> = args => <ButtonApp {...args} />;

export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  children: 'Text',
  theme: ThemeButton.PRIMARY
};

export const PrimaryPurple = Template.bind({});
PrimaryPurple.args = {
  children: 'Text',
  theme: ThemeButton.PRIMARY
};
PrimaryPurple.decorators = [ThemeDecorator(Theme.PURPLE)];

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  children: 'Text',
  theme: ThemeButton.SECONDARY
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  children: 'Text',
  theme: ThemeButton.SECONDARY
};
SecondaryLight.decorators = [ThemeDecorator(Theme.PURPLE)];

export const OutlineDefault = Template.bind({});
OutlineDefault.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};
OutlineLight.decorators = [ThemeDecorator(Theme.PURPLE)];

export const ToggleDefault = Template.bind({});
ToggleDefault.args = {
  children: '>',
  theme: ThemeButton.TOGGLE
};

export const ToggleLight = Template.bind({});
ToggleLight.args = {
  children: '>',
  theme: ThemeButton.TOGGLE
};
ToggleLight.decorators = [ThemeDecorator(Theme.PURPLE)];

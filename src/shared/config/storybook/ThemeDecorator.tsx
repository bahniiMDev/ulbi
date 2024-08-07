import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComp:Story) => (
  <div
    className={`app ${theme}`}
    style={{
      display: 'flex',
      alignItems: 'flex-start'
    }}
  >
    <StoryComp />
  </div>
);

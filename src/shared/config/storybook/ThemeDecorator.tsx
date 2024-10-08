import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComp:Story) => (
  <ThemeProvider initialTheme={theme}>
    <div
      className={`app ${theme}`}
      style={{
        display: 'flex',
        alignItems: 'flex-start'
      }}
    >
      <StoryComp />
    </div>
  </ThemeProvider>

);

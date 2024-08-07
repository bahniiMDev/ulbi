import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComp:Story) => (
  <MemoryRouter>
    <StoryComp />
  </MemoryRouter>
);

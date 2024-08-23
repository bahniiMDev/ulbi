import { ButtonApp, ThemeButton } from 'shared/ui/ButtonApp/ButtonApp';
import { render, screen } from '@testing-library/react';

describe('ButtonApp', () => {
  test('with param ', () => {
    render(<ButtonApp>Test</ButtonApp>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('with param theme ', () => {
    render(<ButtonApp theme={ThemeButton.PRIMARY}>Test</ButtonApp>);
    expect(screen.getByText('Test')).toHaveClass('primary');
  });
});

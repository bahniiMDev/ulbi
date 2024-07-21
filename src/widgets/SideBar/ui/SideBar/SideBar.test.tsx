import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslations } from 'shared/lib/renderWithTranslations/renderWithTranslations';
import { Simulate } from 'react-dom/test-utils';

describe('SideBar', () => {
  test('isExist', () => {
    renderWithTranslations(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    // screen.debug();
  });

  test('isWorkToggle', () => {
    renderWithTranslations(<SideBar />);
    const toggleBtn = screen.getByTestId('toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('big');
  });
});

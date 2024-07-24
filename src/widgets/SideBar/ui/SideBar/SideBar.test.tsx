import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslations } from 'shared/lib/renderWithTranslations/renderWithTranslations';

describe('SideBar', () => {
  test('isExist', () => {
    renderWithTranslations(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('isWorkToggle', () => {
    renderWithTranslations(<SideBar />);
    const toggleBtn = screen.getByTestId('toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('big');
  });
});

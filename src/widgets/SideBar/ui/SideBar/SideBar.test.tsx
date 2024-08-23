import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { componentRender } from 'shared/lib/componentRender/componentRender';

describe('SideBar', () => {
  test('isExist', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('isWorkToggle', () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('big');
  });
});

import { useContext } from 'react';
import { KEY_THEME, Theme, ThemeContext } from './themeContext';

type ThemeHook = {
	theme: Theme;
	toggleTheme: () => void;
};
export const useThemeContext = (): ThemeHook => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DEFAULT ? Theme.PURPLE : Theme.DEFAULT;
    setTheme(newTheme);
    localStorage.setItem(KEY_THEME, newTheme);
  };

  return { theme, toggleTheme };
};

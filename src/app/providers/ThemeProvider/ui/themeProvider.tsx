import React, { type FC, useMemo, useState } from 'react';
import { KEY_THEME, Theme, ThemeContext } from '../lib/themeContext';

const defaultTheme: Theme = localStorage.getItem(KEY_THEME) as Theme || Theme.DEFAULT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

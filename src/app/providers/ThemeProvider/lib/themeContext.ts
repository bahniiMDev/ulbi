import { createContext } from 'react';

export enum Theme {
	DEFAULT = 'default',
	PURPLE = 'purple',
}

export type ThemeContextProps = {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});
export const KEY_THEME = 'theme';

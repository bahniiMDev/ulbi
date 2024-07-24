import { createContext } from 'react';

export enum Theme {
	// eslint-disable-next-line no-unused-vars
	DEFAULT = 'default',
	// eslint-disable-next-line no-unused-vars
	PURPLE = 'purple',
}

export type ThemeContextProps = {
	theme?: Theme;
	// eslint-disable-next-line no-unused-vars
	setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});
export const KEY_THEME = 'theme';

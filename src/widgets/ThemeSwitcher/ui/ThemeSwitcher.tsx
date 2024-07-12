import React from 'react';

import { Theme, useThemeContext } from 'app/providers/ThemeProvider';
import { ButtonApp, ThemeButton } from 'shared/ui/ButtonApp/ButtonApp';
import { useTranslation } from 'react-i18next';

type ThemeSwitcherProps = {
	className?: string;
};
export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useThemeContext();
  const { t } = useTranslation();

  return (
    <ButtonApp className={className} onClick={toggleTheme} theme={ThemeButton.PRIMARY}>
      {theme === Theme.DEFAULT ? t('default') : t('dark')}
    </ButtonApp>
  );
}

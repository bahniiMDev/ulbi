import React from 'react';
import { ButtonApp, ThemeButton } from 'shared/ui/ButtonApp/ButtonApp';
import { useTranslation } from 'react-i18next';
import cls from './SwitcherLang.module.scss';

export function SwitcherLang() {
  const { t, i18n } = useTranslation('settings');

  const switchLang = async () => {
    i18n.changeLanguage(i18n.language === 'uk'
      ? 'en' : 'uk');
  };

  const aLanguage = i18n.language === 'en' ? 'English' : 'Український';
  return (
    <ButtonApp
      onClick={switchLang}
      theme={ThemeButton.PRIMARY}
      className={cls.switcher}
    >
      {t('lang')}
      {' '}
      :
      &nbsp;
      {aLanguage}
    </ButtonApp>
  );
}

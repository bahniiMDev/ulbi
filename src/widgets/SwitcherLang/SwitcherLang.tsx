import React from 'react';
import { ButtonApp, ThemeButton } from 'shared/ui/ButtonApp/ButtonApp';
import { useTranslation } from 'react-i18next';
import cls from './SwitcherLang.module.scss';

type SwitcherLangProps = {
    className?: string;
};

export function SwitcherLang({ className }: SwitcherLangProps) {
  const { t, i18n } = useTranslation('settings');

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'ua'
      ? 'en' : 'ua');
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

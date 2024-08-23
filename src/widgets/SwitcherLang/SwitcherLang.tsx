import React from 'react';
import { ButtonApp, ThemeButton } from 'shared/ui/ButtonApp/ButtonApp';
import { useTranslation } from 'react-i18next';
// import cls from './SwitcherLang.module.scss';

type SwitcherLangProps = {
  className?: string;
}

export function SwitcherLang({ className }: SwitcherLangProps) {
  const { t, i18n } = useTranslation('settings');

  const switchLang = async () => {
    i18n.changeLanguage(i18n.language === 'uk'
      ? 'en' : 'uk');
  };

  const aLanguage = i18n.language === 'en' ? 'English' : 'Український';
  return (
    <ButtonApp className={className} onClick={switchLang} theme={ThemeButton.PRIMARY}>
      {aLanguage}
    </ButtonApp>
  );
}

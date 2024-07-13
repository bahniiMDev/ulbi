import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import Play from 'shared/assets/icons/play.svg';
import { useTranslation } from 'react-i18next';
import cls from './Logo.module.scss';

type LogoProps = {
	className?: string;
};
export function Logo({ className }: LogoProps) {
  const { t } = useTranslation();
  return (
    <div className={ClassNames(cls.logo, {}, [className])}>
      <Play className={ClassNames(cls.play)} />
      <span className={ClassNames(cls.stream)}>{t('STREAM')}</span>
      <span className={ClassNames(cls.bet)}>{t('BET')}</span>
    </div>
  );
}

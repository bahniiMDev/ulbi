import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import Play from 'shared/assets/icons/play.svg';
import cls from './Logo.module.scss';

type LogoProps = {
	className?: string;
};
export function Logo({ className }: LogoProps) {
  return (
    <div className={ClassNames(cls.logo, {}, [className])}>
      <Play className={ClassNames(cls.play)} />
      <span className={ClassNames(cls.stream)}>STREAM</span>
      <span className={ClassNames(cls.bet)}>BET</span>
    </div>
  );
}

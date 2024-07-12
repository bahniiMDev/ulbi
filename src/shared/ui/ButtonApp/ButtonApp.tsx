import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './ButtonApp.module.scss';

export enum ThemeButton {
	COMMON = 'common',
	PRIMARY = 'primary',
}

type ButtonAppProps = {
	className?: string;
	onClick?: () => void;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonApp: FC<ButtonAppProps> = props => {
  const {
    className, children, onClick, theme = ThemeButton.COMMON, ...other
  } = props;
  return (
    <button type="button" className={ClassNames(cls.btn_app, {}, [cls.btn_app, className, cls[theme]])} onClick={onClick} {...other}>
      {children}
    </button>
  );
};

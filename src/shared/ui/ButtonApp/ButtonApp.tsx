import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './ButtonApp.module.scss';

export enum ThemeButton {
    // eslint-disable-next-line no-unused-vars
	OUTLINE = 'outline',
    // eslint-disable-next-line no-unused-vars
	PRIMARY = 'primary',
    // eslint-disable-next-line no-unused-vars
    SECONDARY = 'secondary',
    // eslint-disable-next-line no-unused-vars
    TOGGLE = 'toggle'
}

export type ButtonAppProps = {
	className?: string;
	onClick?: () => void;
	theme?: ThemeButton;
    square?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonApp: FC<ButtonAppProps> = props => {
  const {
    className,
    children,
    onClick,
    theme = ThemeButton.OUTLINE,
    square,
    ...other
  } = props;
  return (
    <button
      type="button"
      className={ClassNames(cls.btn_app, { [cls.square]: square }, [cls.btn_app, className, cls[theme]])}
      onClick={onClick}

      {...other}
    >
      {children}
    </button>
  );
};

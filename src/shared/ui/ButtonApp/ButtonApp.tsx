import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './ButtonApp.module.scss';

export enum ThemeButton {
    // eslint-disable-next-line no-unused-vars
	OUTLINE = 'outline',
    // eslint-disable-next-line no-unused-vars
	PRIMARY = 'primary',
    // eslint-disable-next-line no-unused-vars
    SECONDARY = 'secondary'
}

export type ButtonAppProps = {
	className?: string;
	onClick?: () => void;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonApp: FC<ButtonAppProps> = props => {
  const {
    className, children, onClick, theme = ThemeButton.OUTLINE, ...other
  } = props;
  return (
    <button
      type="button"
      className={ClassNames(cls.btn_app, {}, [cls.btn_app, className, cls[theme]])}
      onClick={onClick}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...other}
    >
      {children}
    </button>
  );
};

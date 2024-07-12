import React, { type FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { Link, type LinkProps, NavLink } from 'react-router-dom';
import cls from './LinkApp.module.scss';

export enum LinkType {
    NAV = 'nav',
}
export enum LinkTheme {
}
type LinkAppProps = {
	className?: string;
	type?: LinkType;
	theme?: LinkTheme;
} & LinkProps;

export const LinkApp: FC<LinkAppProps> = props => {
  const {
    className, to = '', children, type = 'default', theme = null, ...other
  } = props;
  return (
    type !== LinkType.NAV ? (
      <Link to={to} className={ClassNames(cls.link, {}, [className, cls[theme]])} {...other}>
        {children}
      </Link>
    ) : (
      <NavLink
        to={to}
        className={({ isActive }) => ClassNames(
          cls.link,
          { [cls.active]: isActive },
          [className, cls[theme]]
        )}
        {...other}
      >
        {children}
      </NavLink>
    )
  );
};

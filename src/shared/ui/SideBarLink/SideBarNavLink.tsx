import React, { type FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { type LinkProps, NavLink } from 'react-router-dom';

import cls from './SideBarNavLink.module.scss';

export enum LinkTheme {
}
type LinkAppProps = {
	className?: string;
	theme?: LinkTheme;
} & LinkProps;

export const SideBarNavLink: FC<LinkAppProps> = props => {
  const {
    className, to = '', children, theme = null, ...other
  } = props;
  return (

    <NavLink
      to={to}
      className={({ isActive }) => ClassNames(
        cls.link,
        { [cls.active]: isActive },
        [className, cls[theme]]
      )}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...other}
    >
      {children}
    </NavLink>
  );
};

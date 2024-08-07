import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { SideBarNavLink } from 'shared/ui/SideBarLink/SideBarNavLink';
import { useTranslation } from 'react-i18next';
import cls from './NavMenu.module.scss';

type NavMenuProps = {
	className?: string;
};
export function NavMenu({ className }: NavMenuProps) {
  const { t } = useTranslation();
  return (
    <nav className={ClassNames(cls.nav_menu, {}, [className])}>
      <SideBarNavLink to="/" className={cls.nav_item}>{t('Timer')}</SideBarNavLink>
      <SideBarNavLink to="/reports" className={cls.nav_item}>{t('Reports')}</SideBarNavLink>
      <SideBarNavLink to="/settings" className={cls.nav_item}>{t('Settings')}</SideBarNavLink>
    </nav>
  );
}

import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { LinkApp, LinkType } from 'shared/ui/LinkApp/LinkApp';
import { useTranslation } from 'react-i18next';
import cls from './NavMenu.module.scss';

type NavMenuProps = {
	className?: string;
};
export function NavMenu({ className }: NavMenuProps) {
  const { t } = useTranslation();
  return (
    <nav className={ClassNames(cls.nav_menu, {}, [className])}>
      {/* <LinkApp to="/" className={cls.nav_item} type={LinkType.NAV}>{t('Timer')}</LinkApp> */}
      {/* <LinkApp to="/reports" className={cls.nav_item} type={LinkType.NAV}>{t('Reports')}</LinkApp> */}
      {/* <LinkApp to="/settings" className={cls.nav_item} type={LinkType.NAV}>{t('Settings')}</LinkApp> */}
    </nav>
  );
}

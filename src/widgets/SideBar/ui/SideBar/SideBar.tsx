import React, { useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { useTranslation } from 'react-i18next';

import { UserInfo } from 'widgets/SideBar/ui/UserInfo/UserInfo';
import { Logo } from 'widgets/SideBar/ui/Logo/Logo';
import { NavMenu } from 'widgets/SideBar/ui/NavMenu/NavMenu';
import cls from './SideBar.module.scss';

type SideBarProps = {
	className?: string;
};

export function SideBar({ className }: SideBarProps) {
  const [active] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.sidebar, { [cls.big]: active }, [className])}>
      <Logo />
      <UserInfo />
      <NavMenu />
    </div>
  );
}

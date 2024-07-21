import React, { useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { useTranslation } from 'react-i18next';

import { UserInfo } from 'widgets/SideBar/ui/UserInfo/UserInfo';
import { Logo } from 'widgets/SideBar/ui/Logo/Logo';
import { NavMenu } from 'widgets/SideBar/ui/NavMenu/NavMenu';
import { ButtonApp } from 'shared/ui/ButtonApp/ButtonApp';
import cls from './SideBar.module.scss';

type SideBarProps = {
	className?: string;
};

export function SideBar({ className }: SideBarProps) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  return (
    <div data-testid="sidebar" className={ClassNames(cls.sidebar, { [cls.big]: active }, [className])}>
      <Logo />
      <UserInfo />
      <NavMenu />
      <ButtonApp
        data-testid="toggle"
        onClick={() => {
          setActive(prev => !prev);
        }}
        className={cls.btn_setter}
      >
        {active ? t('close') : t('open')}
      </ButtonApp>
    </div>
  );
}

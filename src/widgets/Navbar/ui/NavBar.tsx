import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export function NavBar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <header className={ClassNames(cls.navbar, {}, [className])} />
  );
}

import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export function NavBar({ className }: NavbarProps) {
  return (
    <header className={ClassNames(cls.navbar, {}, [className])} />
  );
}

import React, { useCallback } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { ButtonApp } from 'shared/ui/ButtonApp/ButtonApp';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export function NavBar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = React.useState(false);
  const onToggleAuthModal = useCallback(() => {
    setIsOpenAuthModal(prev => !prev);
  }, [setIsOpenAuthModal]);
  return (
    <header className={ClassNames(cls.navbar, {}, [className])}>
      <ButtonApp onClick={onToggleAuthModal}>{t('Log in')}</ButtonApp>
      <Modal isOpen={isOpenAuthModal} onClose={onToggleAuthModal}>
        {t('s')}
      </Modal>
    </header>
  );
}

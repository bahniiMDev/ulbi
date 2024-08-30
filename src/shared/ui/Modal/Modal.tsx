import React, { useCallback, useEffect, useMemo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useThemeContext } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

type ModalProps = {
	className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
};

export function Modal({
  className, children, isOpen, onClose
}: ModalProps) {
  const closeHandler = useMemo(() => onClose && onClose, [onClose]);

  const closeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', closeKey);
    }
    return () => {
      window.removeEventListener('keydown', closeKey);
    };
  }, [isOpen, closeKey]);
  const stopProp = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
  const { theme } = useThemeContext();
  return (
  // eslint-disable-next-line i18next/no-literal-string

    <Portal>
      <div className={ClassNames(cls.modal, { [cls.opened]: isOpen, [cls[theme]]: true }, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={stopProp}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
}

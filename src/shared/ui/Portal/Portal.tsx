import React from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    children?: React.ReactNode;
    domElement?: HTMLElement;
};

export function Portal({ children, domElement = document.body }: PortalProps) {
  return createPortal(children, domElement);
}

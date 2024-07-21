import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './Loader.module.scss';

 interface LoaderProps {
     className?: string;
 }
export const Loader = ({ className } :LoaderProps) => (
  <div className={ClassNames(cls.loader, {}, [className])}>
    <div />
    <div />
  </div>
);

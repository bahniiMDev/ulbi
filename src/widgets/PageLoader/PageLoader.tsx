import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={ClassNames(cls.page_loader, {}, [className])}>
    <Loader />
  </div>
);

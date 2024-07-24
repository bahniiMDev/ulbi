import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SwitcherLang } from 'widgets/SwitcherLang/SwitcherLang';
import React from 'react';
import cls from './PageSettings.module.scss';

function PageSettings() {
  return (
    <div className={cls.switchers}>
      <ThemeSwitcher />
      <SwitcherLang />

    </div>
  );
}

export default PageSettings;

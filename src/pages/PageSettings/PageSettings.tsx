import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ButtonApp } from 'shared/ui/ButtonApp/ButtonApp';
import { SwitcherLang } from 'widgets/SwitcherLang/SwitcherLang';
import React, { useState } from 'react';
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

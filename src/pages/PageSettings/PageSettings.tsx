import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ButtonApp } from 'shared/ui/ButtonApp/ButtonApp';
import { SwitcherLang } from 'widgets/SwitcherLang/SwitcherLang';
import React, { useState } from 'react';
import cls from './PageSettings.module.scss';

function PageSettings() {
  const { t } = useTranslation('settings');
  const [active, setActive] = useState(false);

  return (
    <div className={cls.switchers}>
      <ThemeSwitcher />
      <SwitcherLang />

      <ButtonApp
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

export default PageSettings;

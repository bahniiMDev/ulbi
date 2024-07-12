import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routingConfig } from 'shared/config/routingConfig/routingConfig';
import { useTranslation } from 'react-i18next';

function RouterPages() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>{t('Loading...')}</div>}>
      <Routes>
        {routingConfig.map(obj => (
          <Route {...obj} key={obj.path} />
        ))}
      </Routes>
    </Suspense>
  );
}

export { RouterPages };

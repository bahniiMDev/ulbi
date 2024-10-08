import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routingConfig } from 'shared/config/routingConfig/routingConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

function RouterPages() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routingConfig.map(obj => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Route {...obj} key={obj.path} />
        ))}
      </Routes>
    </Suspense>
  );
}

export { RouterPages };

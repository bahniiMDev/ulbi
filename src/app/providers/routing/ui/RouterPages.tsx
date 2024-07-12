import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routingConfig } from 'shared/config/routingConfig/routingConfig';

function RouterPages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routingConfig.map(obj => (
          <Route {...obj} key={obj.path} />
        ))}
      </Routes>
    </Suspense>
  );
}

export { RouterPages };

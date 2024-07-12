import React from 'react';

const PageTimesAsync = React.lazy(async () => import('./PageTimes'));

export { PageTimesAsync };

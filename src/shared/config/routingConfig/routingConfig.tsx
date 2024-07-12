import { type RouteProps } from 'react-router-dom';
import { PageReports } from 'pages/PageReports';
import { PageTimes } from 'pages/PageTimes';
import { PageSettings } from 'pages/PageSettings';

export const routingConfig: RouteProps[] = [
  { path: '/', element: <PageTimes /> },
  { path: '/reports', element: <PageReports /> },
  { path: '/settings', element: <PageSettings /> }
];

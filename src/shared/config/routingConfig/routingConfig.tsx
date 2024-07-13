import { type RouteProps } from 'react-router-dom';
import { PageReports } from 'pages/PageReports';
import { PageTimes } from 'pages/PageTimes';
import { PageSettings } from 'pages/PageSettings';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routingConfig: RouteProps[] = [
  { path: '/', element: <PageTimes /> },
  { path: '/reports', element: <PageReports /> },
  { path: '/settings', element: <PageSettings /> },
  { path: '/*', element: <NotFoundPage /> }
];

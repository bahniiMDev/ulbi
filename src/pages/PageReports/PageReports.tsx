import { useTranslation } from 'react-i18next';

function PageReports() {
  const { t } = useTranslation('reports');

  return (
    <div>
      {t('Page Reports')}
    </div>
  );
}

export default PageReports;

import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

function PageTimes() {
  const { t } = useTranslation('timer');
  return (
    <div>
      {t('Page Timer')}
    </div>
  );
}

export default PageTimes;

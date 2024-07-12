import { useTranslation } from 'react-i18next';

function PageTimes() {
  const { t } = useTranslation('timer');
  return <div>{t('Page Timer')}</div>;
}

export default PageTimes;

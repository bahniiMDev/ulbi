import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './NotFoundPage.module.scss';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.page)}>
      <p>
        {t('Not found page')}
      </p>
    </div>
  );
}

export default NotFoundPage;

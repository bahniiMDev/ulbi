import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
// import diamond from '';
// import crown from '';
import { useTranslation } from 'react-i18next';
// import avatar from '';
import cls from './UserInfo.module.scss';

type UserInfoProps = {
	className?: string;
};

export function UserInfo({ className }: UserInfoProps) {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.user_info, {}, [className])}>
      <img alt={t('avatar')} className={ClassNames(cls.avatar, {}, [])} src="shared/assets/avatars/avatar1.png" />
      <p className={ClassNames(cls.nick)}>
        {t('Bobby Kinsman')}
      </p>
      <div className={ClassNames(cls.stats)}>
        <div className={ClassNames(cls.stats_block, {}, [cls.diamonds])}>
          <div className={ClassNames(cls.count_block)}>
            <img className={ClassNames(cls.stats_icon)} src="shared/assets/icons/diamond.png" alt={t('diamond')} />
            <span className={ClassNames(cls.count)}>35</span>
          </div>
          {t('Rewards')}
        </div>
        <div className={ClassNames(cls.stats_block, {}, [cls.diamonds])}>
          <div className={ClassNames(cls.count_block)}>
            <img className={ClassNames(cls.stats_icon)} src="shared/assets/icons/crown.png" alt={t('crown')} />
            <span className={ClassNames(cls.count)}>15</span>

          </div>
          {t('Wins')}
        </div>
      </div>
    </div>
  );
}

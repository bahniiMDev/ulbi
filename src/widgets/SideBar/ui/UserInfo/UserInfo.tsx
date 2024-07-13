import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import avatar from 'shared/assets/avatars/avatar1.png';
import diamond from 'shared/assets/icons/diamond.png';
import crown from 'shared/assets/icons/crown.png';
import { useTranslation } from 'react-i18next';
import cls from './UserInfo.module.scss';

type UserInfoProps = {
	className?: string;
};

export function UserInfo({ className }: UserInfoProps) {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.user_info, {}, [className])}>
      <img alt={t('avatar')} className={ClassNames(cls.avatar, {}, [])} src={avatar} />
      <p className={ClassNames(cls.nick)}>
        {t('Bobby Kinsman')}
      </p>
      <div className={ClassNames(cls.stats)}>
        <div className={ClassNames(cls.stats_block, {}, [cls.diamonds])}>
          <div className={ClassNames(cls.count_block)}>
            <img className={ClassNames(cls.stats_icon)} src={diamond} alt={t('diamond')} />
            <span className={ClassNames(cls.count)}>35</span>
          </div>
          {t('Rewards')}
        </div>
        <div className={ClassNames(cls.stats_block, {}, [cls.diamonds])}>
          <div className={ClassNames(cls.count_block)}>
            <img className={ClassNames(cls.stats_icon)} src={crown} alt={t('crown')} />
            <span className={ClassNames(cls.count)}>15</span>

          </div>
          {t('Wins')}
        </div>
      </div>
    </div>
  );
}

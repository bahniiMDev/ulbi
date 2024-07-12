import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import avatar from 'shared/assets/avatars/avatar1.png';
import diamond from 'shared/assets/icons/diamond.png';
import crown from 'shared/assets/icons/crown.png';
import cls from './UserInfo.module.scss';

type UserInfoProps = {
	className?: string;
};

export function UserInfo({ className }: UserInfoProps) {
  return (
    <div className={ClassNames(cls.user_info, {}, [className])}>
      <img alt="avatar" className={ClassNames(cls.avatar, {}, [])} src={avatar} />
      <p className={ClassNames(cls.nick)}>
        Bobby Kinsman
      </p>
      <div className={ClassNames(cls.stats)}>
        <div className={ClassNames(cls.stats_block, {}, [cls.diamonds])}>
          <div className={ClassNames(cls.count_block)}>
            <img className={ClassNames(cls.stats_icon)} src={diamond} alt="diamond" />
            <span className={ClassNames(cls.count)}>35</span>
          </div>
          Rewards
        </div>
        <div className={ClassNames(cls.stats_block, {}, [cls.diamonds])}>
          <div className={ClassNames(cls.count_block)}>
            <img className={ClassNames(cls.stats_icon)} src={crown} alt="crown" />
            <span className={ClassNames(cls.count)}>15</span>

          </div>
          Wins
        </div>
      </div>
    </div>
  );
}

import { FC, memo } from 'react';
import cls from './Dashboard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface IDashboardProps {
  className?: string;
}

export const Dashboard: FC<IDashboardProps> = memo(props => {
  const { className } = props;

  return (
    <div className={classNames(cls.dashboard, {}, [className])}>
      <div />
    </div>
  );
});

// export default Dashboard;

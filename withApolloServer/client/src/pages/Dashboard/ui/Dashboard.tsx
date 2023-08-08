import {ChangeEvent, FC, memo, useMemo, useState} from 'react';
import cls from './Dashboard.module.scss';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {Linear} from 'src/features/Linear';
import {Pie} from 'src/features/Pie';
import {Bar} from 'src/features/Bar';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'src/shared/lib/DynamicModuleLoader';
import {dashboardReducer} from 'src/entities/Dashboard';

export interface IDashboardProps {
  className?: string;
}

type TGraph = 'pie' | 'bar' | 'linear';

const reducers: ReducersList = {
  dashboard: dashboardReducer,
};

const Dashboard: FC<IDashboardProps> = memo((props) => {
  const {className} = props;

  const [typeGraph, setTypeGraph] = useState<TGraph>('pie');

  const options = useMemo(() => ['pie', 'bar', 'linear'], []);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) =>
    setTypeGraph(event.target.value as TGraph);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.dashboard, {}, [className])}>
        <label htmlFor='products'>Choose a graph:</label>
        <select onChange={handleSelect} name='products' id='products'>
          {options.map((item) => (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
        {typeGraph === 'pie' && <Pie />}
        {typeGraph === 'bar' && <Bar />}
        {typeGraph === 'linear' && <Linear />}
      </div>
    </DynamicModuleLoader>
  );
});

export default Dashboard;

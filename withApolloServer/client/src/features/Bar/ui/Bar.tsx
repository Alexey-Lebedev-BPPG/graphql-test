import {FC, memo, useEffect, useMemo} from 'react';
import cls from './Bar.module.scss';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {BarChart} from '@mui/x-charts/BarChart';
import {
  getAllCategories,
  getDashboardIsLoading,
  getAllCategoriesAction,
} from 'src/entities/Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import {Skeleton} from 'src/shared/ui/Skeleton';

export interface IBarProps {
  className?: string;
}

export const Bar: FC<IBarProps> = memo((props) => {
  const {className} = props;

  const dispatch = useDispatch();

  const allCategories = useSelector(getAllCategories);
  const isLoading = useSelector(getDashboardIsLoading);

  const currentLabels = useMemo(
    () =>
      allCategories && allCategories.length > 0
        ? Array.from(allCategories, (item) => item._id)
        : [],
    [allCategories]
  );

  const currentCounts = useMemo(
    () =>
      allCategories && allCategories.length > 0
        ? Array.from(allCategories, (item) => item.total)
        : [],
    [allCategories]
  );

  useEffect(() => {
    dispatch(getAllCategoriesAction({items: 10}));
  }, [dispatch]);

  return (
    <div className={classNames(cls.bar, {}, [className])}>
      <h1>Top 10 best-selling products</h1>
      {allCategories && allCategories?.length > 0 && !isLoading ? (
        <BarChart
          xAxis={[
            {id: 'barCategories', data: currentLabels, scaleType: 'band'},
          ]}
          series={[{data: currentCounts, color: '#f28e2c'}]}
          width={1000}
          height={700}
        />
      ) : (
        <Skeleton width={1000} height={700} />
      )}
    </div>
  );
});

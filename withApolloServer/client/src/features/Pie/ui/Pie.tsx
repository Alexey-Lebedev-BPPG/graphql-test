import {FC, memo, useEffect, useMemo} from 'react';
import cls from './Pie.module.scss';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {PieChart} from '@mui/x-charts/PieChart';
import {
  getAllCategories,
  getAllCategoriesAction,
  getDashboardIsLoading,
} from 'src/entities/Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import {Skeleton} from 'src/shared/ui/Skeleton';

export interface IPieProps {
  className?: string;
}

export const Pie: FC<IPieProps> = memo((props) => {
  const {className} = props;
  const dispatch = useDispatch();

  const allCategories = useSelector(getAllCategories);
  const isLoading = useSelector(getDashboardIsLoading);

  const currentData = useMemo(
    () =>
      allCategories?.map(({_id, total}, index) => ({
        id: index,
        value: total,
        label: _id,
      })),
    [allCategories]
  );

  useEffect(() => {
    dispatch(getAllCategoriesAction({}));
  }, [dispatch]);

  return (
    <div className={classNames(cls.pie, {}, [className])}>
      <h1>Total number of sales by category</h1>
      {currentData && currentData?.length > 0 && !isLoading ? (
        <PieChart series={[{data: currentData}]} width={1000} height={700} />
      ) : (
        <Skeleton width={1000} height={700} />
      )}
    </div>
  );
});

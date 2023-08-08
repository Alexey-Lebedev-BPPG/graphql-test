import {FC, memo, useEffect, useMemo} from 'react';
import cls from './Linear.module.scss';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {LineChart} from '@mui/x-charts/LineChart';
import {
  getAllProducts,
  getAllProductsAction,
  getDashboardIsLoading,
} from 'src/entities/Dashboard';
import {useDispatch, useSelector} from 'react-redux';
import {Skeleton} from 'src/shared/ui/Skeleton';

export interface ILinearProps {
  className?: string;
}

export const Linear: FC<ILinearProps> = memo((props) => {
  const {className} = props;

  const dispatch = useDispatch();

  const allProducts = useSelector(getAllProducts);
  const isLoading = useSelector(getDashboardIsLoading);

  const scaleNumber = useMemo(() => {
    if (allProducts && allProducts?.length)
      return Array.from(
        {length: allProducts?.length},
        (_, index) => index + 1 + ' days ago'
      ).reverse();
  }, [allProducts]);

  useEffect(() => {
    dispatch(getAllProductsAction({days: 7}));
  }, [dispatch]);

  return (
    <div className={classNames(cls.linear, {}, [className])}>
      <h1>Linear</h1>

      {allProducts && allProducts?.length > 0 && !isLoading ? (
        <LineChart
          xAxis={[{data: scaleNumber, scaleType: 'point'}]}
          series={[{data: [...allProducts].reverse()}]}
          width={1000}
          height={700}
        />
      ) : (
        <Skeleton width={1000} height={700} />
      )}
    </div>
  );
});

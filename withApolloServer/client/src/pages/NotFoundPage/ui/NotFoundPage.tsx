import {FC, memo} from 'react';
import cls from './NotFoundPage.module.scss';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {useNavigate} from 'react-router-dom';
import {getRouteDashboard} from 'src/shared/const/router';

export interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<INotFoundPageProps> = memo((props) => {
  const {className} = props;
  const navigate = useNavigate();

  const redirect = () => navigate(getRouteDashboard());

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      <h2>Page not found</h2>
      <h1>Ooops! Something went wrong...</h1>
      <p>
        This page doesn’t exist or was removed! We suggest you back to dashboard
      </p>
      <button type='button' onClick={redirect}>
        Go to dashboard
      </button>
    </div>
  );
});

export default NotFoundPage;

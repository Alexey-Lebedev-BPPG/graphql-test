import {FC, memo} from 'react';
import cls from './WelcomePage.module.scss';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {useNavigate} from 'react-router-dom';
import {getRouteDashboard} from 'src/shared/const/router';

export interface IWelcomePageProps {
  className?: string;
}

const WelcomePage: FC<IWelcomePageProps> = memo((props) => {
  const {className} = props;
  const navigate = useNavigate();

  const redirect = () => navigate(getRouteDashboard());

  return (
    <div className={classNames(cls.welcomePage, {}, [className])}>
      <h1>Welcome to project</h1>
      <button type='button' onClick={redirect}>
        Go to dashboard
      </button>
    </div>
  );
});

export default WelcomePage;

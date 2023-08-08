import {Suspense} from 'react';
import './styles/App.css';
import {classNames} from 'src/shared/lib/classNames/classNames';
import {AppRouters} from './providers/router';

function App() {
  return (
    <div className={classNames('App', {}, [])}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouters />
      </Suspense>
    </div>
  );
}

export default App;

import { Suspense, lazy } from 'react';
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home').then(module => ({default:module.Home})))

export function App() {;

  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Home/>
      </Suspense>
    </div>
  );
}

export default App;

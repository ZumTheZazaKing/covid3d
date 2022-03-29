import { Suspense, lazy } from 'react';
import Loading from './components/Loading'

const CanvasContainer = lazy(() => import('./Canvas').then(module => ({default:module.CanvasContainer})))

export function App() {;

  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <CanvasContainer/>
      </Suspense>
    </div>
  );
}

export default App;

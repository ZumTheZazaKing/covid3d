import { Suspense, lazy, useState } from 'react';
import Loading from './components/Loading';
import MobileWarn from './components/MobileWarn';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Context } from './Context';

import en from './translations/en.json';

const Home = lazy(() => import('./pages/Home').then(module => ({default:module.Home})))
const Covid = lazy(() => import('./pages/Covid').then(module => ({default:module.Covid})));
const Variants = lazy(() => import('./pages/Variants').then(module => ({default:module.Variants})))
const Symptoms = lazy(() => import('./pages/Symptoms').then(module => ({default:module.Symptoms})))
const Stats = lazy(() => import('./pages/Stats').then(module => ({default:module.Stats})))
const Timeline = lazy(() => import('./pages/Timeline').then(module => ({default:module.Timeline})))

const customHistory = createBrowserHistory({});
window.appHistory = customHistory;

export function App() {

  const [language, setLanguage] = useState('en');
  const [currentLanguage, setCurrentLanguage] = useState(en);

  return (
    //window.innerWidth < 1000 || window.innerHeight < 600 ? <MobileWarn /> :
    <HashRouter history={customHistory}>
      <div className="App">
        <Suspense fallback={<Loading/>}>
          <Context.Provider value={{
            language, setLanguage, currentLanguage, setCurrentLanguage
          }}>
            <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/covid" element={<Covid/>}/>
              <Route path="/variants" element={<Variants/>} />
              <Route path="/symptoms" element={<Symptoms/>} />
              <Route path="/stats" element={<Stats/>}/>
              <Route path="/timeline" element={<Timeline/>}/>

           </Routes>
          </Context.Provider>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;

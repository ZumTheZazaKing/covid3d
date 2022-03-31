import { Suspense, lazy, useState } from 'react';
import Loading from './components/Loading'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Context } from './Context';

import en from './translations/en.json';

const Home = lazy(() => import('./pages/Home').then(module => ({default:module.Home})))
const Variants = lazy(() => import('./pages/Variants').then(module => ({default:module.Variants})))

const customHistory = createBrowserHistory({});
window.appHistory = customHistory;

export function App() {

  const [language, setLanguage] = useState('en');
  const [currentLanguage, setCurrentLanguage] = useState(en);

  return (
    <HashRouter history={customHistory}>
      <div className="App">
        <Suspense fallback={<Loading/>}>
          <Context.Provider value={{
            language, setLanguage, currentLanguage, setCurrentLanguage
          }}>
            <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/variants" element={<Variants/>} />

           </Routes>
          </Context.Provider>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default App;

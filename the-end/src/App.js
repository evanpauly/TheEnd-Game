import React from 'react';
import StartPage from "./components/StartPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FirstQuestion from './components/FirstQuestion';
import StayHome from './components/StayHome';
import HitTheRoad from './components/HitTheRoad';
import Walk from './components/Walk'
import Drive from './components/Drive';


function App() {
    return (
        <Router>
          <div>
            <div>
            <Header />
              <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/FirstQuestion' element={<FirstQuestion />} />
                <Route path='/StayHome' element={<StayHome />} />
                <Route path='/HitTheRoad' element={<HitTheRoad />} />
                <Route path='/Walk' element={<Walk />} />
                <Route path='/Drive' element={<Drive />} />
              </Routes>
            </div>
            </div>
        </Router>
    );
  }

export default App;

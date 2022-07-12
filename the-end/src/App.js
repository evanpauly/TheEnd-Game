import React from 'react';
import StartPage from "./components/StartPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstQuestion from './components/FirstQuestion';

function App() {
    return (
        <Router>
          <div>
            <div>
              <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/FirstQuestion' element={<FirstQuestion />} />
              </Routes>
            </div>
            </div>
        </Router>
    );
  }

export default App;

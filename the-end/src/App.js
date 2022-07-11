import React from 'react';
import StartPage from "./components/StartPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
          <div>
            <div>
              <Routes>
                <Route path='/' element={<StartPage />} />
              </Routes>
            </div>
            </div>
        </Router>
    );
  }

export default App;

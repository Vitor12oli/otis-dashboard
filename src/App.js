import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Feedback from './pages/Feedback';
import './App.css';

import AppNavbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column">
        <AppNavbar />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 main-content p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;

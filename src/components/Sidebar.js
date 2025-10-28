import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-dark text-white vh-100 p-3 sidebar">
      <div className="text-center mb-4" style={{color:'#FF6600', fontSize:'1.5rem', fontWeight:'bold'}}>OTIS</div>
      <nav className="nav flex-column">
        <Link className={`nav-link ${location.pathname==='/'?'active':''}`} to="/">Dashboard</Link>
        <Link className={`nav-link ${location.pathname==='/projects'?'active':''}`} to="/projects">Projetos</Link>
        <Link className={`nav-link ${location.pathname==='/reports'?'active':''}`} to="/reports">Relatórios</Link>
        <Link className={`nav-link ${location.pathname==='/feedback'?'active':''}`} to="/feedback">Feedback</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

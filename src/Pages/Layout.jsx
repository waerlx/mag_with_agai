import './App.css';
import React from'react';
import Home from './Pages/Home/Home';
import Menu from './components/Menu/Menu';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="Layout">
     <div>header</div>
     <div className="container">
      <Outlet/>
     </div>
    </div>
  );
}

export default Layout;

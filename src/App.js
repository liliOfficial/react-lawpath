import React from "react";

import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import Header from "./components/header/header";
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Dashboard/>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;

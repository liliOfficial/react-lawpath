import React from "react";

import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import Header from "./components/header/header";
import Dashboard from './components/dashboard/dashboard';
import FloatButton from './components/floatButton/floatButton';
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
      <FloatButton />
    </div>
  );
}

export default App;

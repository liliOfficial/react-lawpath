import React from "react";

import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import Header from "./components/header/header";
import FloatButton from './components/floatButton/floatButton';
import Router from './routes';
function App() {
  return (
    <div>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Router/>
        </div>
      </div>
      <Sidebar />
      <FloatButton />
    </div>
  );
}

export default App;

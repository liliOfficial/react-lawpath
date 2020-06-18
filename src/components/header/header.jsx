import React from "react";
import './header.css';

const Header = () => {
    const userName = 'John Doe';
  return (
    <div className="header">
      <div className="welcome">Welcome to Lawpath, {userName}</div>
      <div className="actions">{userName}</div>
    </div>
  );
};

export default Header;

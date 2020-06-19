import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch, faBell, faArrowDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const userName = "John Doe";
  return (
    <div className="header-box">
      <div className="welcome">Welcome to Lawpath, {userName}</div>
      <div className="actions">
        <Link to="/lawpath-test" className="icon-link">
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </Link>
        <Link to="/lawpath-test" className="icon-link">
          <FontAwesomeIcon className="icon hover-text-blue" icon={faPhone} />
          <div className="hint">Lawpath support</div>
        </Link>
        <Link to="/lawpath-test" className="icon-link">
          <FontAwesomeIcon className="icon hover-text-yellow" icon={faBell} />
          <div className="hint">My notifications</div>
        </Link>
        <span>
          {userName}
          <FontAwesomeIcon className="icon-down" icon={ faAngleDown} />
        </span>
      </div>
    </div>
  );
};

export default Header;

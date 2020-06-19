import React from "react";
import { Link } from "react-router-dom";
import "./user.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faFile,
  faBusinessTime,
  faComment,
  faBicycle
} from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const bodyItem = [
    {
      name: "My Documents",
      icon: faFile
    },
    {
      name: "My Business",
      icon: faBusinessTime
    },
    {
      name: "My Quotes",
      icon: faComment
    },
    {
      name: "My Lawyer Consultation",
      icon: faPhone
    }
  ];
  return (
    <div className="card user">
      <div className="user-header">
        John Doe
        <FontAwesomeIcon className="icon" icon={faUser} />
      </div>
      <div className="user-body">
        {bodyItem.map((item, index) => {
          return (
            <div key={index} className="user-body-item hover-blue">
              <FontAwesomeIcon className="icon" icon={item.icon} />
              <div className="name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="user-footer">
        <div className="upgrade">
          <span>You are currently on</span>
          <Link to="/lawpath-test" className="upgrade-link">Upgrade</Link>
        </div>
        <Link to="/lawpath-test" className="hover-dark button">
          <FontAwesomeIcon className="icon" icon={faBicycle} />
          Freemium
        </Link>
      </div>
    </div>
  );
};

export default User;

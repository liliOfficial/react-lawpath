import React from "react";
import {Link} from "react-router-dom";
import "./sidebar.css";
import Logo from "./img/horizontal.svg";

const Sidebar = () => {
  const sidebarList = [
    {
      img: require("./img/dashboard.png"),
      alt: "Dashboard Icon",
      name: "Dashboard"
    },
    {
      img: require("./img/documents.png"),
      alt: "Legal Documents Icon",
      name: "Legal Documents"
    },
    {
      img: require("./img/companies.png"),
      alt: "Companies Icon",
      name: "Companies"
    },
    {
      img: require("./img/lawyer.png"),
      alt: "Lawyer Quotes Icon",
      name: "Lawyer Quotes"
    },
    {
      img: require("./img/consultations.png"),
      alt: "Lawyer Consultations Icon",
      name: "Lawyer Consultations"
    },
    {
      img: require("./img/legal.png"),
      alt: "Legal Solutions Icon",
      name: "Legal Solutions"
    },
    {
      img: require("./img/offers.png"),
      alt: "Our Partner Offers Icon",
      name: "Our Partner Offers"
    },
    {
      img: require("./img/about.png"),
      alt: "About Icon",
      name: "About"
    },
    {
      img: require("./img/dashboard.png"),
      alt: "Settings Icon",
      name: "Settings"
    }
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo} alt="logo" />
      </div>
      {sidebarList.map(item => {
        return (
   
            <Link to="/"className="sidebar-item" key={item.name} >
              <img src={item.img} alt={item.alt} />
              <span>{item.name}</span>
            </Link>
        
        );
      })}
      <div className="button-box">
        <a href="/" className="upgrate">
          Upgrate
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import Logo from "./img/horizontal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const sidebarList = [
    {
      link: "/",
      img: require("./img/dashboard.png"),
      alt: "Dashboard Icon",
      name: "Dashboard"
    },
    {
      link: "/lawpath-test",
      img: require("./img/documents.png"),
      alt: "Legal Documents Icon",
      name: "Legal Documents"
    },
    {
      link: "/lawpath-test",
      img: require("./img/companies.png"),
      alt: "Companies Icon",
      name: "Companies"
    },
    {
      link: "/lawpath-test",
      img: require("./img/lawyer.png"),
      alt: "Lawyer Quotes Icon",
      name: "Lawyer Quotes"
    },
    {
      link: "/lawpath-test",
      img: require("./img/consultations.png"),
      alt: "Lawyer Consultations Icon",
      name: "Lawyer Consultations"
    },
    {
      link: "/lawpath-test",
      img: require("./img/legal.png"),
      alt: "Legal Solutions Icon",
      name: "Legal Solutions"
    },
    {
      link: "/lawpath-test",
      img: require("./img/offers.png"),
      alt: "Our Partner Offers Icon",
      name: "Our Partner Offers"
    },
    {
      link: "/lawpath-test",
      img: require("./img/about.png"),
      alt: "About Icon",
      name: "About"
    },
    {
      link: "/lawpath-test",
      img: require("./img/settings.png"),
      alt: "Settings Icon",
      name: "Settings"
    }
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {sidebarList.map(item => {
        return (
          <Link to={item.link} className="sidebar-item" key={item.name}>
            <img src={item.img} alt={item.alt} />
            <span>{item.name}</span>
          </Link>
        );
      })}
      <div className="button-box">
        <Link to="/lawpath-test" className="hover-dark upgrate">
          Upgrate
          <FontAwesomeIcon className="icon" icon={faUpload}/>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "./event.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const UpcomingEvent = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div>Upcoming Event</div>
      </div>
      <div className="event-body">
        <h4>COVID-19:</h4>
        <h2>Your Business Questions Answered</h2>
        <div>
          <FontAwesomeIcon className="icon" icon={faCalendar} /> 9 April 2020
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faClock} /> 1pm AEST
        </div>
        <Link to="/lawpath-test" className="register-button hover-dark">
          Register now
        </Link>
        <img src={require("./covid.png")} alt="" />
      </div>
    </div>
  );
};

export default UpcomingEvent;

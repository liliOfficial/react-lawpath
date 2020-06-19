import React from "react";
import {Link} from "react-router-dom";
import './event.scss';

const UpcomingEvent = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div>Upcoming Event</div>
      </div>
      <div className="event-body">
        <h4>COVID-19:</h4>
        <h2>Your Business Questions Answered</h2>
        <div>9 April 2020</div>
        <div>1pm AEST</div>
        <Link to="/lawpath-test" className="register-button hover-dark">Register now</Link>
        <img src={require('./covid.png')} alt=""/>
      </div>
    </div>
  );
};

export default UpcomingEvent;

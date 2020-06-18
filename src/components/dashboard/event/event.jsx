import React from "react";
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
        <a className="register-button">Register now</a>
        <img src={require('./covid.png')} alt=""/>
      </div>
    </div>
  );
};

export default UpcomingEvent;

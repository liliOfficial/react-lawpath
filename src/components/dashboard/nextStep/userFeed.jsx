import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {SET_USER_FEED} from "./userFeed.query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./nextStep.scss";

const UserFeed = () => {

  const { loading, error, data } = useQuery(SET_USER_FEED);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.UserFeed.map(item => {
        return (
          <div className="step-item hover-blue" key={item.id}>
            <div className="img-box">
              <img className="step-icon" src={item.icon} alt="" />
            </div>
            <div className="content">{item.trackEvent.slice(4)}</div>
            <FontAwesomeIcon className="icon" icon={faTimes} />
          </div>
        );
      })}
    </div>
  );
};

export default UserFeed;

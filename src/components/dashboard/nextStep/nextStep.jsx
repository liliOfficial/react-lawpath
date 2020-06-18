import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./nextStep.scss";

const NextStep = () => {
  const USER_FEED = gql`
    {
      UserFeed(userId: "6677072274098487296") {
        id
        icon
        seq
        persist
        dismissed
        timestamp
        trackEvent
        md
      }
    }
  `;

  const { loading, error, data } = useQuery(USER_FEED);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="card">
      <div className="card-header">
        <div>Next steps</div>
      </div>
      <div className="step-list">
        {data.UserFeed.map(item => {
          return (
            <div className="step-item hover-blue" key={item.id}>
              <div class="img-box">
                <img className="step-icon" src={item.icon} alt="" />
              </div>
              <div>{item.trackEvent.slice(4)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NextStep;

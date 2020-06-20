import React from "react";

import "./nextStep.scss";
import UserFeed from "./userFeed";

const NextStep = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div>Next steps</div>
      </div>
      <div className="step-list">
        <UserFeed />
      </div>
    </div>
  );
};

export default NextStep;

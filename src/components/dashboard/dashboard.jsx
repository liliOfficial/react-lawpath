import React from "react";
import "./dashboard.scss";
import NextStep from "./nextStep/nextStep";
import LegalSolutions from "./solutions/legalSolutions";
import RecentlyBlog from "./blog/blog";
import UpcomingEvent from "./event/event";
import User from "./user/user";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-top">
        <User />
        <NextStep />
      </div>
      <LegalSolutions />
      <div className="blog-event">
        <RecentlyBlog />
        <UpcomingEvent />
      </div>
    </div>
  );
};

export default Dashboard;

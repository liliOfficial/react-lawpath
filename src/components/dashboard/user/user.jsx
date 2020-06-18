import React from "react";
import "./user.scss";

const User = () => {
  const bodyItem = [
    {
      name: "My Documents"
    },
    {
      name: "My Business"
    },
    {
      name: "My Quotes"
    },
    {
      name: "My Lawyer Consultation"
    }
  ];
  return (
    <div className="card user">
      <div className="user-header">John Doe</div>
      <div className="user-body">
        {bodyItem.map((item, index) => {
          return (
            <div key={index} className="user-body-item hover-blue">
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="user-footer">
        <div>You are currently on</div>
        <a href="#" className="button">
          Freemium
        </a>
      </div>
    </div>
  );
};

export default User;

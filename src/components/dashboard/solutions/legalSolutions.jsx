import React from "react";
import "./legalSolutions.css";

const LegalSolutions = () => {
  const solutions = [
    {
      icon: require("./img/documents.png"),
      name: "Create Legal Documents"
    },
    {
      icon: require("./img/company.png"),
      name: "Register My Company"
    },
    {
      icon: require("./img/lawyer.png"),
      name: "Get Free Quotes From Lawyers"
    },
    {
      icon: require("./img/employee.png"),
      name: "Manage My Employees"
    }
  ];
  return (
    <div className="card">
      <div className="card-header">
        <div>Popular Legal Solutions</div>
        <div className="card-action">View all solutions</div>
      </div>
      <div className="solution-body">
        {solutions.map(solution => {
          return (
            <div className="solution hover-blue" key={solution.name}>
              <img src={solution.icon} alt="" />
              <div>{solution.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LegalSolutions;

import React from "react";
import CreateClass from "./CreateClass";
import "../App.css";

const ClassSection = ({ studentArray, classListArray, handleClick }) => {
  const cohorts = new Set(classListArray);

  return (
    <div className="list">
      <h2>Choose a Class by Start Date</h2>
      <h3
        className="All"
        onClick={(event) => {
          const text = event.target.textContent;
          handleClick(text, studentArray);
        }}
      >
        All Classes
      </h3>
      {[...cohorts].map((cohort) => {
        return (
          <CreateClass
            cohort={cohort}
            key={cohort}
            handleClick={(event) => {
              const text = event.target.textContent;
              const code = text.split(" ").join("");
              handleClick(code, studentArray);
            }}
          />
        );
      })}
    </div>
  );
};

export default ClassSection;

import React from "react";

function Cohort(props) {
  const Data = props.studentsData;

  const allStudents = (
    <li
      onClick={() => {
        props.setStudentsData([...props.initialSate]);
        props.setCurrentTitle("All Students");
      }}
    >
      All Students{" "}
    </li>
  );

  const uniqueCohort = [
    ...new Set(Data.map(({ cohort }) => cohort.cohortCode)),
  ];

  const cohort = uniqueCohort
    .sort(function (a, b) {
      return a.attr > b.attr ? -1 : 1;
    })
    .map((el, i) => {
      const cohortYear = el.replace(/(\d+)/g, " $1");

      return (
        <li
          key={i}
          onClick={() => {
            props.setStudentsData([
              ...Data.filter(({ cohort }) => cohort.cohortCode === el),
            ]);
            props.setCurrentTitle(cohortYear);
          }}
        >
          {cohortYear}
        </li>
      );
    });

  return (
    <div className='Cohort'>
      <h2>Choose a Class by Start Date</h2>
      <div className='CohortList'>
        <ol>
          {allStudents}
          {cohort}
        </ol>
      </div>
    </div>
  );
}

export default Cohort;

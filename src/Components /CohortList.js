const CohortList = ({ data }) => {
  return (
    <div className="">
      <h2>Choose a class by Start Date</h2>
      {data.map(({ cohort }) => {
        return (
          <p>
            <span>{cohort.cohortCode}</span>
          </p>
        );
      })}
    </div>
  );
};

export default CohortList;

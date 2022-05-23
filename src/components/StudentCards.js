import Card from './Card';

function StudentCards(props) {
  let { term, data, matchingStudents } = props;
  let termTitle = "";

  if (!term) {
    matchingStudents = data;
  } else {
    matchingStudents = data.filter(el => el.cohort['cohortCode'] === term);
    termTitle = term.substring(0, term.length - 4) + " " + term.substring(term.length - 4)
  }

  return (
    <>
      <h2> { !termTitle ? "All Students" : termTitle} </h2>
      <h3>Total Students: {matchingStudents.length}</h3>
      <div className='student-card-container'>
        {matchingStudents.map(student => <Card student={student} />)};
      </div>
    </>
  )
}

export default StudentCards;
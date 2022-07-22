/** @format */
import React, { useState } from 'react';
import StudentList from './Components/StudentList';
import StudentCard from './Components/StudentCard';
import Cohort from './Components/Cohort';
import Nav from './Components/Nav';
import studentData from './data/data.json';

function App() {
	const [students, setStudents] = useState(studentData);
	const [cohortName, setCohortName] = useState('All Students');

	const studentId = studentData.map((student) => <li>{student.id}</li>);
	const studentIds = <ul>{studentId}</ul>;

	console.log(studentId);

	return (
		<div>
			<Nav />
			<section className='dashboard-lists'>
				<Cohort
					studentData={studentData}
					studentId={studentId}
					cohortName={cohortName}
					setCohortName={setCohortName}
					students={students}
					setStudents={setStudents}
				/>
				<StudentList
					studentData={studentData}
					setStudents={setStudents}
					students={students}
					cohortName={cohortName}
					StudentCard={<StudentCard />}
				/>
			</section>
		</div>
	);
}

export default App;

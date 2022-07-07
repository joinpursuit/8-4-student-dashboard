/** @format */
import React, { useState } from 'react';
import StudentList from './Components/StudentList';
import Cohort from './Components/Cohort';
import Nav from './Components/Nav';
import studentData from './data/data.json';

function App() {
	const [students, setStudents] = useState(studentData);
	const [result, setResult] = useState('');
	const [cohortName, setCohortName] = useState('All Students');

	return (
		<div>
			<Nav />
			<Cohort
				studentData={studentData}
				id={studentData.id}
				cohortName={cohortName}
				setCohortName={setCohortName}
				students={students}
				setStudents={setStudents}
				onClick={setCohortName}
			/>
			<StudentList
				studentData={studentData}
				setStudents={setStudents}
				students={students}
				cohortName={cohortName}
				onChange={setStudents}
			/>
		</div>
	);
}

export default App;

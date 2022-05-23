/** @format */
import React, { useState } from 'react';
import StudentList from './Components/StudentList';
import Cohort from './Components/Cohort';
import studentData from './data/data.json';

function App() {
	const [students, setStudents] = useState(studentData);

	return (
		<div>
			<h1>Student Dashboard</h1>
			<Cohort studentData={students} setStudents={setStudents} />
			<StudentList studentData={students} />
		</div>
	);
}

export default App;

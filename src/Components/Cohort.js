/** @format */

import React from 'react';
import StudentCard from './StudentCard';

function Cohort(props) {
	const {
		studentData,
		id,
		setCohortName,
		cohortName,
		students,
		cohortCode,
		setStudents,
	} = props;

	console.log(props);
	console.log(id);
	console.log(cohortName);
	console.log(students);

	let newList = [
		...new Set(studentData.map((student) => student.cohort.cohortCode)),
	];
	console.log(newList);

	const handleNameClick = (cohortName) => {
		setCohortName(cohortName);
	};

	const handleAllStudentsClick = (studentData) => {
		setStudents(studentData);
	};

	return (
		<>
			<h2>Choose a Class by Start Date</h2>

			<ul>
				<li>All Students</li>

				{newList.map((cohortName) => (
					<li key={studentData.id} onClick={() => handleNameClick(cohortName)}>
						{cohortName}
					</li>
				))}
			</ul>
		</>
	);
}

export default Cohort;

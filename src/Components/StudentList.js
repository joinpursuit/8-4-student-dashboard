/** @format */

import React from 'react';
import StudentCard from './StudentCard';
import Cohort from './Cohort';

import '../index.css';

export default function StudentList(props) {
	const {
		studentData,
		id,
		cohortName,
		students,
		setStudents,
		cohortCode,
		cohort,
	} = props;

	let result = students.filter(
		(student) => student.cohort.cohortCode === cohortName
	);

	const handleChange = (e) => {
		cohortName ? setStudents(result) : setStudents(students);
		console.log(e.target.value);
	};

	return (
		<div className='student-list'>
			<h2>{cohortName}</h2>
			<p>Total Students: {cohortName ? result.length : studentData.length}</p>
			{result.map((student) => {
				return (
					<div onChange={() => handleChange(cohortName)}>
						{<StudentCard student={student} id={student.id} />}
					</div>
				);
			})}
		</div>
	);
}

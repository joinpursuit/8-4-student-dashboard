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


	const handleChange = (students) => {
		setStudents(students);
	};

	return (
		<div className='student-list'>
			<h2>{cohortName}</h2>
			<p>Total Students: {cohortName ? students.length : result.length}</p>
			<div onChange={() => handleChange(students)}>
				{cohortName ? students.map((student) => {
					<StudentCard student={student} id={student.id} />
				}) : result.map((student) => {
					<StudentCard student={student} id={student.id} />
				})}
		</div>
		)
		}



/** @format */

import React from 'react';
import StudentCard from './StudentCard';

import '../index.css';

export default function StudentList(props) {
	return (
		<div className="student-list">
			<h2>All Students</h2>
			<p>Total Students: {props.studentData.length}</p>
			{props.studentData.map((student) => (
				<StudentCard student={student} />
			))}
		</div>
	);
}

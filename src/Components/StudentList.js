/** @format */

import React from 'react';
import StudentCard from './StudentCard';

import '../index.css';

export default function StudentList(props) {
	const { studentData, cohortName, students } = props;

	let cohortResult = students.filter(
		(student) => student.cohort.cohortCode === cohortName
	);

	return (
		<div className='student-list'>
			<h2>{cohortName}</h2>
			<p>
				Total Students:{' '}
				{cohortName === 'All Students'
					? studentData.length
					: cohortResult.length}
			</p>
			{cohortName === 'All Students'
				? students.map((student) => {
						return (
							<div>
								<StudentCard student={student} />
							</div>
						);
				  })
				: students
						.filter((student) => student.cohort.cohortCode === cohortName)
						.map((student) => {
							return (
								<div>
									<StudentCard student={student} />
								</div>
							);
						})}
		</div>
	);
}

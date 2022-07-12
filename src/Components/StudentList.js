/** @format */

import React from 'react';
import StudentCard from './StudentCard';

import '../index.css';

export default function StudentList(props) {
	const { studentData, cohortName, students } = props;
	console.log(props.student);

	let cohortResult = students.filter(
		(student) => student.cohort.cohortCode === cohortName
	);

	return (
		<div className='student-list'>
			<h2>{cohortName === 'All Students' ? 'All Students' : cohortName}</h2>

			<p>
				Total Students:{' '}
				{cohortName === 'All Students'
					? studentData.length
					: cohortResult.length}
			</p>
			{cohortName === 'All Students'
				? students.map((student, index) => {
						return (
							<div>
								<StudentCard key={index} student={student} />
							</div>
						);
				  })
				: students
						.filter((student) => student.cohort.cohortCode === cohortName)
						.map((student, index) => {
							return (
								<div>
									<StudentCard key={index} student={student} />
								</div>
							);
						})}
		</div>
	);
}

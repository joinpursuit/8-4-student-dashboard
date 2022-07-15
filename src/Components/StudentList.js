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
			{cohortName === 'All Students' ? (
				<h2>All Students</h2>
			) : (
				<h2>
					{cohortName.split(/[0-9]/g)} {cohortName.slice(-4)}
				</h2>
			)}

			<p>
				Total Students:{' '}
				{cohortName === 'All Students' ? (
					<span className='student-details'>{studentData.length}</span>
				) : (
					<span className='student-details'>{cohortResult.length}</span>
				)}
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

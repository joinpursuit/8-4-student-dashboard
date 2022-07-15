/** @format */

import React from 'react';

function Cohort(props) {
	const { studentData, setCohortName } = props;

	const newList = [
		...new Set(studentData.map((student) => student.cohort.cohortCode)),
	];

	let sortList = [...newList].sort((a, b) => {
		return a.toUpperCase() - b.toUpperCase();
	});

	const handleCohortClick = (cohortName) => {
		setCohortName(cohortName);
	};

	return (
		<div className='cohort-list'>
			<h2>Choose a Class by Start Date</h2>

			<ul>
				<li onClick={() => setCohortName('All Students')}>All Students</li>

				{sortList.map((cohortName, index) => (
					<li key={index} onClick={() => handleCohortClick(cohortName)}>
						{cohortName.split(/[0-9]/g)} {cohortName.slice(-4)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Cohort;

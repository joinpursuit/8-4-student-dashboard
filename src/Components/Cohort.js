/** @format */

import React from 'react';

function Cohort(props) {
	const { studentData, setCohortName } = props;

	let newList = [
		...new Set(studentData.map((student) => student.cohort.cohortCode)),
	];
	console.log(newList);

	const handleCohortClick = (cohortName) => {
		setCohortName(cohortName);
	};

	return (
		<>
			<h2>Choose a Class by Start Date</h2>

			<ul>
				<li>All Students</li>

				{newList.map((cohortName) => (
					<li
						key={studentData.id}
						onClick={() => handleCohortClick(cohortName)}
					>
						{cohortName}
					</li>
				))}
			</ul>
		</>
	);
}

export default Cohort;

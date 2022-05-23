/** @format */

import React from 'react';
import StudentCard from './StudentCard';

import App from '../App';

function Cohort(props) {
	const { studentData, setStudents } = props;
	console.log(studentData);

	return (
		<React.Fragment>
			<h2>Choose a Class by Start Date</h2>

			<ul>
				<li>All Students</li>

				{studentData.filter((student) => {
					const { cohortCode } = student.cohort;
					if (student === cohortCode)
						return <li>{student.names.preferredName}</li>;
				})}
			</ul>
		</React.Fragment>
	);
}

export default Cohort;

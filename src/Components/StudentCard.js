/** @format */

import React, { useState } from 'react';
import '../index.css';

function StudentCard(props) {
	const { preferredName, middleName, surname } = props.student.names;
	const { username, dob, profilePhoto } = props.student;

	const [show, setShow] = useState(false);

	return (
		<div className='student-card'>
			<img
				src={profilePhoto}
				alt=''
				width='200'
				height='200'
				className='student-card-image'
			/>
			<section className='student-info'>
				<h2>
					{preferredName} {middleName[0]}. {surname}
				</h2>
				<p>{username}</p>
				<p>
					<span className='student-details'>Birthday: </span>
					{dob}
				</p>
				<h4>
					<button className='btn' onClick={() => setShow(!show)}>
						{show ? 'Show Less...' : 'Show More...'}
					</button>
					{show && <StudentDetailCard />}
				</h4>
			</section>
		</div>
	);
}

const StudentDetailCard = () => {
	return (
		<div className='details-card'>
			<aside className='details-aside'>
				<h3>Codewars</h3>
				<p className='student-details'>Current Total: </p>
				<p className='student-details'>Last Week: </p>
				<p className='student-details'>Goal: </p>
				<p className='student-details'>Percent of Goal Achieved: </p>
			</aside>
			<aside className='details-aside'>
				<h3>Scores</h3>
				<p className='student-details'>Assignments: </p>
				<p className='student-details'>Projects: </p>
				<p className='student-details'>Assessments: </p>
			</aside>
			<aside className='details-aside'>
				<h3>Certifications</h3>
				<p className='student-details'>Resume: </p>
				<p className='student-details'>LinkeIn: </p>
				<p className='student-details'>Mock Interview: </p>
				<p className='student-details'>GitHub: </p>
			</aside>
		</div>
	);
};

export default StudentCard;

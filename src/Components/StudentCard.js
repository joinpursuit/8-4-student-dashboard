/** @format */

import React, { useState } from 'react';
import StudentDetailsCard from './StudentDetailsCard';
import '../index.css';

function StudentCard(props) {
	const { preferredName, middleName, surname } = props.student.names;
	const { username, dob, profilePhoto, codewars, cohort, certifications } =
		props.student;

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
					{show && (
						<StudentDetailsCard
							codewarsTotal={codewars.current.total}
							codewarsLastWeek={codewars.current.lastWeek}
							codewarsGoalTotal={codewars.goal.total}
							cohortScoresAssignments={cohort.scores.assignments}
							cohortScoresProjects={cohort.scores.projects}
							cohortScoresAssessments={cohort.scores.assessments}
							certificationsResume={certifications.resume}
							certificationsLinkedIn={certifications.linkedin}
							certificationsGitHub={certifications.github}
							certificationsMockInterview={certifications.mockInerview}
						/>
					)}
				</h4>
			</section>
		</div>
	);
}

export default StudentCard;

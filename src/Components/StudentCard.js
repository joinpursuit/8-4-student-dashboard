/** @format */

import React, { useState } from 'react';
import StudentDetailsCard from './StudentDetailsCard';
import '../index.css';

function StudentCard(props) {
	const { preferredName, middleName, surname } = props.student.names;
	const { username, dob, profilePhoto, codewars, cohort, certifications } =
		props.student;

	const [show, setShow] = useState(false);

	const graduate =
		codewars.current.total > 600 &&
		certifications.resume &&
		certifications.linkedin &&
		certifications.github &&
		certifications.mockInterview ? (
			<p>On Track to Graduate</p>
		) : (
			''
		);

	return (
		<div className='student-card'>
			<section className='student-info-image'>
				<img
					src={profilePhoto}
					alt='student profile'
					width='150'
					height='150'
				/>
			</section>
			<section className='student-info student-info-color'>
				<h2>
					{preferredName} {middleName[0]}.{surname}
				</h2>

				<p>{username}</p>
				<p>
					<span className='student-details'>Birthday: </span>
					{dob}
				</p>
			</section>
			<section className='show-section'>
				<section className='show-btn-section'>
					<h4>
						<button className='show-btn' onClick={() => setShow(!show)}>
							{show ? 'Show Less...' : 'Show More...'}
						</button>
					</h4>
				</section>
				<section className='show-more'>
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
							certificationsMockInterview={certifications.mockInterview}
						/>
					)}
				</section>
			</section>
			<aside className='ontrack-graduate'>{graduate}</aside>
		</div>
	);
}

export default StudentCard;

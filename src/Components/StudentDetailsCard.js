/** @format */

import React, { useState } from 'react';

function StudentDetailsCard({
	codewarsTotal,
	codewarsLastWeek,
	codewarsGoalTotal,
	cohortScoresAssignments,
	cohortScoresProjects,
	cohortScoresAssessments,
	certificationsResume,
	certificationsLinkedIn,
	certificationsGitHub,
	certificationsMockInterview,
}) {
	return (
		<div className='details-card'>
			<aside className='details-aside'>
				<h3>Codewars</h3>
				<p className='student-details'>
					Current Total:{' '}
					<span className='student-details-value'>{codewarsTotal}</span>
				</p>
				<p className='student-details'>
					Last Week:{' '}
					<span className='student-details-value'>{codewarsLastWeek}</span>
				</p>
				<p className='student-details'>
					Goal:{' '}
					<span className='student-details-value'>{codewarsGoalTotal}</span>
				</p>
				<p className='student-details'>
					Percent of Goal Achieved:{' '}
					<span className='student-details-value'>
						{Number(((codewarsTotal / codewarsGoalTotal) * 100).toFixed(0))}%
					</span>
				</p>
			</aside>
			<aside className='details-aside'>
				<h3>Scores</h3>
				<p className='student-details'>
					Assignments:{' '}
					<span className='student-details-value'>
						{Number((cohortScoresAssignments * 100).toFixed(0))}%
					</span>
				</p>
				<p className='student-details'>
					Projects:{' '}
					<span className='student-details-value'>
						{Number((cohortScoresProjects * 100).toFixed(0))}%
					</span>
				</p>
				<p className='student-details'>
					Assessments:{' '}
					<span className='student-details-value'>
						{Number((cohortScoresAssessments * 100).toFixed(0))}%
					</span>
				</p>
			</aside>
			<aside className='details-aside'>
				<h3>Certifications</h3>
				<p className='student-details'>
					Resume:{' '}
					<span className='student-details-value'>
						{certificationsResume ? <h4>&#x2705;</h4> : <h4>&#x274C;</h4>}
					</span>
				</p>
				<p className='student-details'>
					LinkedIn:{' '}
					<span className='student-details-value'>
						{certificationsLinkedIn ? <h4>&#x2705;</h4> : <h4>&#x274C;</h4>}
					</span>
				</p>
				<p className='student-details'>
					Mock Interview:{' '}
					<span className='student-details-value'>
						{certificationsGitHub ? <h4>&#x2705;</h4> : <h4>&#x274C;</h4>}
					</span>
				</p>
				<p className='student-details'>
					GitHub:{' '}
					<span className='student-details-value'>
						{certificationsMockInterview ? (
							<h4>&#x2705;</h4>
						) : (
							<h4>&#x274C;</h4>
						)}
					</span>
				</p>
			</aside>
		</div>
	);
}

export default StudentDetailsCard;

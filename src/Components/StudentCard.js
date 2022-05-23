/** @format */
import '../index.css';

function StudentCard(props) {
	const { preferredName, middleName, surname } = props.student.names;
	const { username, dob, profilePhoto } = props.student;

	return (
		<div className="student-card">
			<img
				src={profilePhoto}
				alt=""
				width="200"
				height="200"
				className="student-card-image"
			/>
			<section className="student-info">
				<h2>
					{preferredName} {middleName[0]}. {surname}
				</h2>
				<p>{username}</p>
				<p>
					<span className="birthday">Birthday: </span>
					{dob}
				</p>
			</section>
		</div>
	);
}

export default StudentCard;

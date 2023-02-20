import "./Avatar.sass";

const Avatar = () => {
	return (
		<div className="avatar">
			<a href="#">
				<img src="/assets/F.jpg" className="user" />
			</a>
			<div className="description">
				<p>First and Last Name</p>
				<p>Online</p>
			</div>
		</div>
	);
};

export default Avatar;

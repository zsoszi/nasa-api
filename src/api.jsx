import React from "react";

function Api(props) {

	return (
		<div>
			<h3>{props.title}</h3>
			<div className="center">
				<div className="fi">
					<img src={props.picture} alt="ups" />
				</div>
				<div className="se">
					<h2>{props.date}</h2>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Api;

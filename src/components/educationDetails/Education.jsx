import React from "react";
import "./education.css";

function Education() {
	return (
		<div className="educationdetail">
			<div>
				<label>SCHOOL/COLLEGE</label>
				<input class="form-control" type="text" placeholder="Eg:Abhishek" />
			</div>
			<div>
				<label>YEAR</label>
				<input class="form-control" type="text" placeholder="Eg:Abhishek" />
			</div>
			<div>
				<label>DEGREE</label>
				<input class="form-control" type="text" placeholder="Eg:Abhishek" />
			</div>
		</div>
	);
}

export default Education;

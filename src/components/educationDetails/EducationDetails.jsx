import React from "react";
import Education from "./Education";
import { useState, useRef } from "react";
import allActions from "../../actions";
import { useSelector, useDispatch } from "react-redux";

function EducationDetails() {
	const reference = useRef();
	const educationdetail = useSelector((state) => state.educationdetail);
	const dispatch = useDispatch();

	function addEducation() {
		dispatch(allActions.setEducation(<Education />));
	}
	return (
		<div className="container">
			<div className="row head_and_button">
				<div className=" col-6 heading">EDUCATION DETAIL</div>
				<div className="col-6">
					<button
						ref={reference}
						onClick={addEducation}
						type="button"
						class="btn btn-primary"
					>
						ADD MORE
					</button>
				</div>
			</div>
			{educationdetail}
		</div>
	);
}

export default EducationDetails;

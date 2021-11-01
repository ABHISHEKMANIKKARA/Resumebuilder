import React from "react";
import Employment from "./Employment";
import allActions from "../../actions";
import { useSelector, useDispatch } from "react-redux";

function EmployementDetail() {
	const educationdetail = useSelector((state) => state.employementdetail);
	const dispatch = useDispatch();
	function addEmployement() {
		dispatch(allActions.setEmployement(<Employment />));
	}

	return (
		<div className="container">
			<div className="row head_and_button">
				<div className=" col-6 heading">EMPLOYEEMENT DETAIL</div>
				<div className="col-6">
					<button
						onClick={addEmployement}
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

export default EmployementDetail;

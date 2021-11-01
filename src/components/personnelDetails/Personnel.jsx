import React from "react";
import "./Personnel.css";

function Personnel() {
	return (
		<div className="container pdetails">
			<label>NAME</label>
			<input class="form-control" type="text" placeholder="Eg:Abhishek" />
			<label>EMAIL</label>
			<input
				class="form-control"
				type="text"
				placeholder="Eg:abhishek@gmail.com"
			/>
			<label>ADDRESS</label>
			<textarea
				class="form-control"
				id="exampleFormControlTextarea1"
				rows="3"
			></textarea>
			<label>PHONE</label>
			<input class="form-control" type="text" placeholder="Eg:9685369724" />
		</div>
	);
}

export default Personnel;

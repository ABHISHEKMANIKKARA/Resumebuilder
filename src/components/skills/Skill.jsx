import React from "react";
import "./skill.css";
import { WithContext as ReactTags } from "react-tag-input";
import { useState, useRef } from "react";
const KeyCodes = {
	comma: 188,
	enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];
function Skill() {
	let item = {
		tags: [],
		suggestions: [
			{ id: "JAVASCRIPT", text: "JAVASCRIPT" },
			{ id: "PHP", text: "PHP" },
			{ id: "HTML", text: "HTML" },
			{ id: "CSS", text: "CSS" },
			{ id: "JAVA", text: "JAVA" },
			{ id: "BOOTSTRAP", text: "BOOTSTRAP" },
		],
	};
	const [state, setState] = useState(item);

	function handleDelete(i) {
		const { tags } = state;
		setState({
			tags: tags.filter((tag, index) => index !== i),
		});
	}

	function handleAddition(tag) {
		setState((state) => ({ tags: [...state.tags, tag] }));
	}

	const { tags, suggestions } = state;
	return (
		<div className="container">
			<div className="head">SKILLS</div>
			{/*<input class="form-control" type="text" placeholder="" />*/}
			<div>
				<ReactTags
					tags={tags}
					suggestions={suggestions}
					handleDelete={handleDelete}
					handleAddition={handleAddition}
					delimiters={delimiters}
				/>
			</div>
			<div>
				<button
					onClick={() => {
						alert("succesfull");
					}}
					type="button"
					class="addmore btn btn-primary"
				>
					SUBMIT
				</button>
			</div>
		</div>
	);
}

export default Skill;

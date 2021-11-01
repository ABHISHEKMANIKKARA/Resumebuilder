import Education from "../components/educationDetails/Education";

const educationdetail = (state = [<Education />], action) => {
	switch (action.type) {
		case "addeEducation":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default educationdetail;

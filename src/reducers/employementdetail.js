import Employment from "../components/employeeDetails/Employment";

const employementdetail = (state = [<Employment />], action) => {
	switch (action.type) {
		case "addEmployement":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default employementdetail;

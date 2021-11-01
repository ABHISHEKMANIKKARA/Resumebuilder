import EducationDetails from "./components/educationDetails/EducationDetails";
import EmployementDetail from "./components/employeeDetails/EmployementDetail";
import Skill from "./components/skills/Skill";
import Header from "./components/header/Header";
import Personnel from "./components/personnelDetails/Personnel";
import "./App.css";

function App() {
	return (
		<div>
			<Header />
			<Personnel />
			<EducationDetails />
			<EmployementDetail />
			<Skill />
		</div>
	);
}

export default App;

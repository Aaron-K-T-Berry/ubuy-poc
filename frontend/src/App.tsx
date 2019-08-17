import React from "react";
import "./styles/App.css";
import LoginForm from "./components/LoginForm";

const App: React.FC = () => {
	return (
		<div className="page-wrapper" id="parent">
			<div className="h1">uBuy</div>
			
			<div className="container" id="login">
				<div className="login">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default App;

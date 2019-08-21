import React from "react";
import "./styles/App.css";
import LoginForm from "./components/LoginForm";
import AccountInfo from "./components/AccountInfo";
import RegisterCustomer from "./components/RegisterCustomer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Router>
			<div className="page-wrapper">
				<Switch>
					<Route path='/' exact component={LoginForm} />
					<Route path='/account' exact component={AccountInfo}/>
					<Route path='/register' component={RegisterCustomer}/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;

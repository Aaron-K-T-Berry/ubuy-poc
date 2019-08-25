import React from "react";
import "./styles/App.css";
import LoginForm from "./pages/LoginForm";
import AccountInfo from "./pages/AccountInfo";
import RegisterCustomer from "./pages/RegisterCustomer";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const App: React.FC = () => {
  return (
    <Router>
      <SiteHeader />
      <div className="page-wrapper">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/account" exact component={AccountInfo} />
          <Route path="/register" component={RegisterCustomer} />
        </Switch>
      </div>
      <SiteFooter />
    </Router>
  );
};

export default App;

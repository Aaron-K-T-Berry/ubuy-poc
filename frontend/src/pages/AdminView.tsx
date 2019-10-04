import React from "react";
import "../styles/App.css";

export default class AdminView extends React.Component

 {
	render() {
		return (
			<div >
  <div >
    <div >
      <div>
        <h5 >Account Info</h5>
        <p >For Admin only ,edit/add/delete accounts</p>
        <a href="/viewallaccount" >Admin</a>
        <p >For Admin only ,edit/add/delete accounts and products</p>
        <a href="/accountm" >Admin</a>
      </div>
    </div>
  </div>
  <div >
    <div >
      <div >
        <h5 >Branch Info</h5>
        <p >Products management </p>
        <a href="/brm" >Branch</a>
      </div>
    </div>
  </div>
</div>
		);
	}
}

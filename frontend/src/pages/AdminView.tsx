import React from "react";
import "../styles/App.css";
import {Container} from "react-bootstrap"
import { Row, Col } from "react-bootstrap";
import  {User} from "../../../backend/src/model/user.model";
import axios from "axios";
export interface AccountInfoState {
    firstName: string;
    lastName: string;
    email: string;
}
export default class AdminView extends React.Component {

    // @ts-ignore
    const newUser: User = {};

    async componentDidMount() {
		const res = await axios.get("http://localhost:4000/user", {
			withCredentials: true
		});
		console.log(res);
       
		const user: AccountInfoState = {
			firstName: res.data.user.firstName,
			lastName: res.data.user.lastName,
			email: res.data.user.email
		};
		this.setState({ ...user });}
  render() {
      
    return (
      <div>
        
          
          <Row>
            <div className="body-heading">AdminView</div>
          </Row>
         
<div>
  <h3>Accounts info</h3>
  <div>
    <div id="table" >
      <span><a href="User" ><i
         aria-hidden="true"></i></a></span>
      <table>
        <thead>
          <tr>
            <th>Account No   </th>
            <th>First Name   </th>
            <th>Last Name   </th>
            <th>E-mail   </th>
            <th>Adress   </th>
            <th>Sort  </th>
            <th>Remove  </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aurelia Vega</td>
            <td>30</td>
            <td>Deepends</td>
            <td>Spain</td>
            <td>Madrid</td>
            <td>
              <span><a href="#" ><i
                    aria-hidden="true"></i></a></span>
              <span><a href="#" ><i 
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
              <span><button type="button"
                  >Remove</button></span>
            </td>
          </tr>
         
          <tr>
            <td>Guerra Cortez</td>
            <td>45</td>
            <td>Insectus</td>
            <td>USA</td>
            <td>San Francisco</td>
            <td>
              <span><a href="#"><i 
                    aria-hidden="true"></i></a></span>
              <span><a href="#"><i 
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
              <span><button type="button"
                  >Remove</button></span>
            </td>
          </tr>
       
          <tr>
            <td>Guadalupe House</td>
            <td>26</td>
            <td>Isotronic</td>
            <td>Germany</td>
            <td>Frankfurt am Main</td>
            <td>
              <span><a href="#"><i 
                    aria-hidden="true"></i></a></span>
              <span><a href="#"><i 
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
              <span><button type="button"
                  >Remove</button></span>
            </td>
          </tr>
       
          <tr>
            <td>Elisa Gallagher</td>
            <td>31</td>
            <td>Portica</td>
            <td>United Kingdom</td>
            <td>London</td>
            <td>
              <span><a href="#" ><i 
                    aria-hidden="true"></i></a></span>
              <span><a href="#" ><i 
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
              <span><button type="button"
                >Remove</button></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

       
      </div>
    );
  }
}

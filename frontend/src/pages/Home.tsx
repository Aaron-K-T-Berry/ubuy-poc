import React from "react";
import "../styles/App.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <SiteFooter />
      </div>
    );
  }
}

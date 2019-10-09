import React from "react";
import "../../styles/App.css";
import "./styles/SiteFooter.css";


export interface SiteFooterProps {}
export interface SiteFooterState {}

export default class SiteFooter extends React.Component<
  SiteFooterProps,
  SiteFooterState
> {
  render() {
    return(
    <div>
      <footer className="py-4 bg-dark flex-shrink-0">
        <div className="container text-center">
                <h4 className="text-muted">
                  &copy; 2019 <strong>uBuy</strong>
                </h4>
        </div>
      </footer>
    </div>
    );
  }
}

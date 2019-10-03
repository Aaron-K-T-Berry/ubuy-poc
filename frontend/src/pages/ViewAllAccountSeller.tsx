import React from "react";
import "../styles/App.css";
import UserTable from "../components/AccountsViewerSeller/SellerViewerTable";

export interface ViewSellerState {

}

export interface ViewSellerProps {

}

export default class ViewAllAccountSeller extends React.Component<ViewSellerProps, ViewSellerState> {
    constructor(props: any){
        super(props);
    }

    render() {
        return(
            <div className="content-body">
                <div className="body-heading">View All Seller Accounts</div>
                <div>
                    <UserTable />
                </div>
            </div>
        );
    }
}
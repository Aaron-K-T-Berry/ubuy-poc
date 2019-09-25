import React from "react";
import "../styles/App.css";
import axois from "axios";
import ItemAdder from '../components/ItemAdder';

export interface AddItemState {

}

export interface AddItemProps {

}


export default class AddItem extends React.Component {
    render() {
        return(
            <div className="content-body flex-center">
                <div className="body-heading">Add New Item</div>
                <ItemAdder />
            </div>
        );
    }
}
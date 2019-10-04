import React from "react";
import "../styles/App.css";
import EditItem from "../components/ItemViewer/ItemEdit";
import dummy_data, {Item} from "../components/ItemViewer/data/itemsStub";

export interface EditItemState {
}

export interface EditItemProps {
    itemID: number;
}

export default class ViewItem extends React.Component<EditItemProps, EditItemState> {
    constructor(props: any){
        super(props);
        this.state = {
            items: dummy_data
        }
    }

    render(){
        return(
            <EditItem itemID={101} />
        );
    }
}
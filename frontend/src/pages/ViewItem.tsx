import React from "react";
import "../styles/App.css";
import dummy_data, {Item} from "../components/ItemViewer/data/itemsStub";
import { LinkProps } from "react-router-dom";

export interface ViewItemState {
    items: Item[];
}

// export interface ViewItemProps {
//     item: {
//         name: string;
//         price: string;
//         branch: string;
//         desc: string;
//         img: string;
//     }
// }

// not sure what to put here in for props so i can access the 
// location i passed in through Link from ItemCard
export default class ViewItem extends React.Component<LinkProps, ViewItemState> {
    constructor(props: any){
        super(props);
        this.state = {
            items: dummy_data
        }
        var item = this.state.items.find(this.props.location.state.id);
    }

    render(){
        return(
            <div>
                <h1>
                    <h1>{this.props.item.name}</h1>
                </h1>
            </div>
        );
    }
}
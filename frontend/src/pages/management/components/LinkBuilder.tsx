import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/App.css";

export const LinkList = (heading: string, linkList: any[]) => {
	return (
		<>
			<h3>{heading}</h3>
			<ul className="ul1">
				{linkList.map(item => {
					return (
						<li>
							<h4>
								<Link to={item.path}>{item.title}</Link>
							</h4>
						</li>
					);
				})}
			</ul>
		</>
	);
};

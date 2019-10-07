import React from "react";
import { Link } from "react-router-dom";

export const LinkList = (heading: string, linkList: any[]) => {
	return (
		<>
			<h4>{heading}</h4>
			<ul>
				{linkList.map(item => {
					return (
						<li>
							<Link to={item.path}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

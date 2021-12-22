import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbarItems">
					<h1 className="navbar-logo">Logo</h1>
					<div className="menu-icon"></div>
					<ul className="menu-list">
						{MenuItems.map((item, index) => {
							console.log(index);
							return (
								<li key={index}>
									<a className={item.cName} href={item.url} rel="noreferrer">
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;

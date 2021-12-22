import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbarItems">
					<h1 className="navbar-logo">
						Logo <i className="fas fa-user-tie"></i>
					</h1>
					<div className="menu-icon"></div>
					<ul className="menu-list">
						{MenuItems.map((item, index) => {
							console.log(index);
							return (
								<li key={index}>
									<NavLink
										className={item.cName}
										to={item.url}
										rel="noreferrer"
									>
										{item.title}
									</NavLink>
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

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header>
		<nav>
			<ul className="nav">
				<li className="nav--items">
					<NavLink
						to="/"
						activeClassName="nav-link__active"
						className=""
						className="nav--links"
						exact
					>
						Dashboard
					</NavLink>

					<NavLink
						to="/layout-challenge"
						activeClassName="nav-link__active"
						className=""
						className="nav--links"
						exact
					>
						Layout Challenge
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;

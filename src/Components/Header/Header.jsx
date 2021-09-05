import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Pages/Login/Redux-Saga/Login/action";
import "./Header.css";

const Header = () => {
	const username = useSelector((state) => state.login.userName);
	const isUserLoggedIn = useSelector((state) => state.login);

	const dispatch = useDispatch();

	return (
		<div className="header">
			<Link to="/">
				<h1>POST 📬</h1>
			</Link>
			{isUserLoggedIn ? (
				<ul className="header__list">
					<li>Hi {username}</li>
					<li className="header__list__link">
						<Link to="/create">Create Post</Link>
					</li>
					<li
						className="header__list__link"
						onClick={() => dispatch(logout(false))}
					>
						Log out
					</li>
					<li className="header__list__link">
						<Link to="/about">About Us</Link>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default Header;

import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "./Redux-Saga/Login/action";

const Login = () => {
	const [user, setUser] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogin = (user) => {
		dispatch(login(user));
		history.push("/");
	};

	return (
		<div className="login">
			<div className="login__form">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Type username..."
					required
					name="user"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<button disabled={!user} onClick={() => handleLogin(user)}>
					LOG IN
				</button>
			</div>
		</div>
	);
};

export default Login;

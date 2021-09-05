import { LOGIN, LOGOUT } from "../constants";

export const login = (isLoggedIn) => ({
	type: LOGIN,
	payload: isLoggedIn,
});

export const logout = (isLogout) => ({
	type: LOGOUT,
	payload: isLogout,
});

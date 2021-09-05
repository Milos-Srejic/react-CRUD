import produce from "immer";
import { LOGIN, LOGOUT } from "./constants";

// In initial state default state must be of the same type like it will become after the state changes
const initialState = {
	userName: "",
	isLogged: false,
};

/* eslint-disable default-case */
const loginReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case LOGIN:
				draft.userName = action.payload;
				draft.isLogged = true;
				return draft;

			case LOGOUT:
				draft.userName = "";
				draft.isLogged = action.payload;
				return draft;
		}
	});

export default loginReducer;

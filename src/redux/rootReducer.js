import { combineReducers } from "redux";
import loginReducer from "../Pages/Login/Redux-Saga/reducer";
import { postReducer } from "./ducks/Post";

const rootReducer = combineReducers({
	login: loginReducer,
	post: postReducer,
});

export default rootReducer;

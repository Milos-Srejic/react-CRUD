import { combineReducers } from "redux";
import { postReducer } from "./ducks/Post";
import { userReducer } from "./ducks/User";

const rootReducer = combineReducers({
	user: userReducer,
	post: postReducer,
});

export default rootReducer;

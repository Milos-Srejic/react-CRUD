import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./ducks/User";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import { postReducer } from "./ducks/Post";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
	user: userReducer,
	post: postReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;

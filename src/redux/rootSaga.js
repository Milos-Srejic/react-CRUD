import { all } from "redux-saga/effects";
import { watcherSaga } from "./sagas/rootSaga";

// In this array dev put all root sagas per functionality and calling it like a function
export default function* rootSaga() {
	yield all([watcherSaga()]);
}

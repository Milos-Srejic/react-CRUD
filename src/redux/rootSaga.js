import { all } from "redux-saga/effects";
import { watcherSaga } from "./sagas/rootSaga";

export default function* rootSaga() {
	yield all([watcherSaga()]);
}

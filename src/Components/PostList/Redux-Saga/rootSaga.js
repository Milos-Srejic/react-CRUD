import { takeLatest } from "redux-saga/effects";
import { GET_POSTS } from "./constants";
import { handleGetPostsWorker } from "./ListPosts/saga";

function* getPostsSaga() {
	yield takeLatest(GET_POSTS, handleGetPostsWorker);
}
export default getPostsSaga;

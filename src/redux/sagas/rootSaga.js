import { takeLatest } from '@redux-saga/core/effects';
import { DELETE_POST_API, FETCH_POSTS } from '../ducks/Post';
import { handleDeletePostApi, handleGetPosts } from './handlers/Post';

export function* watcherSaga() {
  yield takeLatest(FETCH_POSTS, handleGetPosts);
  yield takeLatest(DELETE_POST_API, handleDeletePostApi);
}

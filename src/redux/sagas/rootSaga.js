import { takeLatest } from '@redux-saga/core/effects';
import { FETCH_POSTS } from '../ducks/Post';
import { handleGetPosts } from './handlers/Post';

export function* watcherSaga() {
  yield takeLatest(FETCH_POSTS, handleGetPosts);
}

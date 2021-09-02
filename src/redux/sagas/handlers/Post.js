import { call, put } from '@redux-saga/core/effects';
import { requestGetPosts } from '../requests/Post';
import { fetchPostsFailure, fetchPostsSuccess } from '../../ducks/Post';

export function* handleGetPosts() {
  try {
    const response = yield call(requestGetPosts);
    const { data } = response;
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

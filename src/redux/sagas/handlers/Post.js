import { call, put } from '@redux-saga/core/effects';
import { requestDeletePostApi, requestGetPosts } from '../requests/Post';
import {
  deletePost,
  fetchPostsFailure,
  fetchPostsSuccess,
} from '../../ducks/Post';

export function* handleGetPosts() {
  try {
    const response = yield call(requestGetPosts);
    const { data } = response;
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* handleDeletePostApi(action) {
  const { id } = action;
  try {
    yield call(requestDeletePostApi, id);
    yield put(deletePost(id));
  } catch (error) {
    console.error(error);
  }
}

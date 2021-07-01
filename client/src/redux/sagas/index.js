import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

function* fetchPostsSaga(action) {
	try {
		const posts = yield call(api.fetchPosts);
		yield put(actions.getPosts.getPostsSuccess(posts.data));
	} catch (error) {
		console.error(error);
		yield put(actions.getPosts.getPostsFailure(error));
	}
}

function* createPostSaga(action) {
	try {
		const post = yield call(api.createPost, action.payload);
		yield put(actions.createPost.createPostSuccess(post.data));
	} catch (error) {
		console.error(error);
		yield put(actions.createPost.createPostFailure(error));
	}
}

function* updatePostSaga(action) {
	try {
		const post = yield call(api.updatePost, action.payload);
		yield put(actions.updatePost.updatePostSuccess(post.data));
	} catch (error) {
		console.error(error);
		yield put(actions.updatePost.createPostFailure(error));
	}
}

function* deletePostSaga(action) {
	try {
		const post = yield call(api.deletePost, action.payload);
		yield put(actions.deletePost.deletePostSuccess(post.data));
		console.log('[deletePostSaga - post]', post.data);
	} catch (error) {
		console.error(error);
		yield put(actions.deletePost.deletePostFailure(error));
	}
}

function* mySaga() {
	yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
	yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
	yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
	yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;

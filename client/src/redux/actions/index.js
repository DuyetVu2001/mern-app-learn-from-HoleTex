import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => reduxAction().type;

export const getPosts = createActions({
	getPostsRequest: undefined,
	getPostsSuccess: (payLoad) => payLoad,
	getPostsFailure: (err) => err,
});

export const createPost = createActions({
	createPostRequest: (payLoad) => payLoad,
	createPostSuccess: (payLoad) => payLoad,
	createPostFailure: (err) => err,
});

export const updatePost = createActions({
	updatePostRequest: (payLoad) => payLoad,
	updatePostSuccess: (payLoad) => payLoad,
	updatePostFailure: (err) => err,
});

export const deletePost = createActions({
	deletePostRequest: (payLoad) => payLoad,
	deletePostSuccess: (payLoad) => payLoad,
	deletePostFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

/*
  getType(getPosts.getPostSuccess)
  =>  
  {
    type: 'getPostSuccess',
    payload: {
      name: 'Test'
    }
  }
*/

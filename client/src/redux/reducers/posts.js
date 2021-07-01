import {
	getPosts,
	getType,
	createPost,
	updatePost,
	deletePost,
} from '../actions';
import { INIT_STATE } from '../../constant';

export default function postsReducer(state = INIT_STATE.posts, action) {
	switch (action.type) {
		case getType(getPosts.getPostsRequest):
			return {
				...state,
				isLoading: true,
			};
		case getType(getPosts.getPostsSuccess):
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		case getType(getPosts.getPostsFailure):
			return {
				...state,
				isLoading: false,
			};
		case getType(createPost.createPostSuccess):
			return {
				...state,
				data: [...state.data, action.payload],
			};
		case getType(updatePost.updatePostSuccess):
			return {
				...state,
				data: state.data.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
			};
		case getType(deletePost.deletePostSuccess):
			const search = (arr, value, key) => {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i][key] === value) {
						return i;
					} else return -1;
				}
			};

			let indexDelete = search(state.data, action.payload._id, '_id');
			console.log('acTion: -- ', action.payload);
			return {
				...state,
				data: action.payload._id === state.data[indexDelete]._id ? [
					...state.data.slice(0, indexDelete),
					...state.data.slice(indexDelete + 1),
				] : state.data,
			};
		default:
			return state;
	}
}

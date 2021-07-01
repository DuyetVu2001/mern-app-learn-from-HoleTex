import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import { postsState$ } from '../../redux/selectors';
import * as actions from '../../redux/actions';

function PostList() {
	const dispatch = useDispatch();
	const posts = useSelector(postsState$);

	useEffect(() => {
		dispatch(actions.getPosts.getPostsRequest());
	}, [dispatch]);

	return (
		<Grid container spacing={2} alignItems="stretch">
			{posts.map((post) => (
				<Grid item xs={12} sm={6}>
					<Post  key={post._id} post={post} />
				</Grid>
			))}
		</Grid>
	);
}

export default PostList;

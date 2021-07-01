import React, { useCallback } from 'react';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography,
} from '@material-ui/core';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { updatePost, deletePost } from '../../../redux/actions';

export default function Post({ post }) {
	const classes = useStyles();
	const { _id, author, title, content, attachment, likeCount, createdAt } =
		post;
	const dispatch = useDispatch();

	const onLikeClick = useCallback(() => {
		dispatch(
			updatePost.updatePostRequest({
				...post,
				likeCount: likeCount + 1,
			})
		);
	}, [dispatch, post, likeCount]);

	const onDeleteClick = useCallback(() => {
		dispatch(deletePost.deletePostRequest({ ...post, _id: _id }));
	}, [dispatch, post, _id]);

	return (
		<Card>
			<CardHeader
				avatar={<Avatar>Avatar</Avatar>}
				title={author}
				subheader={moment(createdAt).format('HH:MM MMM DD, YYYY')}
				action={
					<IconButton onClick={onDeleteClick}>
						{/* <MoreVertIcon /> */}
						Delete
					</IconButton>
				}
			/>
			<CardMedia image={attachment} title="Title" className={classes.media} />
			<CardContent>
				<Typography variant="h5" color="textPrimary">
					{title}
				</Typography>
				<Typography variant="body2" component="p" color="textSecondary">
					{content}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton onClick={onLikeClick}>
					<FavoriteIcon />
				</IconButton>
				<Typography component="span" color="textSecondary">
					{likeCount}
				</Typography>
			</CardActions>
		</Card>
	);
}

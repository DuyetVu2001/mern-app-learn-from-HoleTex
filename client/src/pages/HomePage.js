import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Header from '../components/Header';
import PostList from '../components/PostList';
import CreatePostModal from '../components/CreatePostModal';
import useStyles from './style';
import { showModal } from '../redux/actions';

function HomePage() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const openCreatePostModal = useCallback(() => {
		dispatch(showModal());
	}, [dispatch]);

	return (
		<Container maxWidth="lg" className="">
			<Header></Header>
			<PostList></PostList>
			<CreatePostModal />
			<Fab
				color="primary"
				className={classes.fab}
				onClick={openCreatePostModal}
			>
				<AddIcon />
			</Fab>
		</Container>
	);
}

export default HomePage;

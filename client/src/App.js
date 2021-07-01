import HomePage from './pages/HomePage';
import { useDispatch } from 'react-redux';
import * as actions from './redux/actions';

function App() {
	const dispatch = useDispatch();
	dispatch(actions.getPosts.getPostsRequest());
	return <HomePage />;
}

export default App;

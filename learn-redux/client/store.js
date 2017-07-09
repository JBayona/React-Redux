import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//Create an object from the default data
const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

//Keep track the history on where we go
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
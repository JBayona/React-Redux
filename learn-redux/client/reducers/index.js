import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

/*Si tenemos multiples reducers hay que combinarlos
como en este caso que solo tenemos el main en donde los
combinamos*/
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
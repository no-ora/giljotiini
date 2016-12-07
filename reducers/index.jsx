import { combineReducers } from 'redux';
import todos from './todos';
import games from './games';

const rootReducer = combineReducers({
    todos,
    games
});

export default rootReducer;

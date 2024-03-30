import {createStore, applyMiddleware, combineReducers} from 'redux';
import { newsReducer } from './reducers/NewReducer';
import { favoriteReducer } from './reducers/FavoriteReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({newsReducer:newsReducer, favorite: favoriteReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
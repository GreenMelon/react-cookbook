import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter from 'reducers/counter';
import user  from 'reducers/user';

const store = createStore(combineReducers({
    counter,
    user,
}), applyMiddleware(thunkMiddleware));

export default store;

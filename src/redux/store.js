import { createStore, combineReducers } from 'redux';
import counter from 'reducers/counter';

const store = createStore(combineReducers({ counter }));

export default store;

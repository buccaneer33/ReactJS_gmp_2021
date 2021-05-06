import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {rootReducer} from '../modules';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

    return store;
};

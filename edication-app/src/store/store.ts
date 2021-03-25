import {createStore, applyMiddleware} from 'redux';
import {rootReducer}  from './redicers/reducers';
import { compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

export const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

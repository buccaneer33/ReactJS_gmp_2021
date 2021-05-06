import {combineReducers} from 'redux';
import {filmsReduces} from './films';

export const rootReducer = combineReducers({
    films: filmsReduces,
});

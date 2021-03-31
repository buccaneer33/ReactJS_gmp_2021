import {ACTIONS} from '../actions/actionsTypes';
import {AnyAction, Reducer} from 'redux';
import {newMovieCard} from '../../common/interfaces/ApiDataInterface';

export const initialState: any[] = [];

export const movieReducer: Reducer = (state = initialState, action: AnyAction): newMovieCard[] => {
    switch(action.type) {
        case ACTIONS.ADD_MOVIE:
            return action.payload;
        case ACTIONS.REMOVE_MOVIE:
            return action.payload;
        case ACTIONS.EDIT_MOVIE:
            return action.payload;
        case ACTIONS.GET_MOVIES: 
            return action.payload;
        default: 
            return state;
    }
}
import {ACTIONS} from '../actions/actionsTypes';
import orderBy from 'lodash/orderBy';

export const initialState = [];

type ActionProps = {
    type: string,
    payload: any
}

export const movieReducer = (state = initialState, action: ActionProps): ActionProps["payload"] => {
    switch(action.type) {
        case ACTIONS.FETCH_MOVIES:
           return action.payload;
        case ACTIONS.SEARCH_MOVIES:
            return action.payload;
        case ACTIONS.ADD_MOVIE:
            return action.payload;
        case ACTIONS.SORT_MOVIES:
            return orderBy(state, action.payload, 'asc');
        case ACTIONS.REMOVE_MOVIE:
            return action.payload;
        case ACTIONS.EDIT_MOVIE:
                return action.payload;
        case ACTIONS.FILTER_MOVIES:
                return action.payload;
        default: 
            return state;
    }
}
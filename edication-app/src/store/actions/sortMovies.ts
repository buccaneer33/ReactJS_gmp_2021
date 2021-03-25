import {ACTIONS} from './actionsTypes';

interface ReturnInterface {
    type: string;
    payload: string;
}
export const sortMovies = (sortType: string): ReturnInterface => ({
    type: ACTIONS.SORT_MOVIES,
    payload: sortType,
});
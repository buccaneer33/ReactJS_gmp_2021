import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const URL = 'http://localhost:4000/movies';

export const fetchMovies = (): AppThunk => (
    (dispatch):void => {(
        fetch(
            `${URL}`,
            {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' })
            })
            .then(response => response.json())
            .then(response => {
                // console.log("filmList: ", response);
                dispatch({
                    type: ACTIONS.FETCH_MOVIES,
                    payload: response.data
                })
            })
    )}
)

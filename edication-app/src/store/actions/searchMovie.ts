import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const URL = 'http://localhost:4000/movies';

export const searchMovies = (id: number): AppThunk => {
    if (!id) return;
    // console.log('id', id);

    return (
        (dispatch) => (
            fetch(
                `${URL}/${id}`,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => response.json())
                .then(response => {
                    // console.log("filmList: ", response);
                    dispatch({
                        type: ACTIONS.SEARCH_MOVIES,
                        payload: response.data
                    })
                })
        )
    )
}

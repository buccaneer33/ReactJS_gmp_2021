import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const URL = 'http://localhost:4000/movies';

export const removeMovies = (id: number): AppThunk => {
    // console.log('id', id);
    if (!id) return;

    return (
        (dispatch) => (
            fetch(
                `${URL}/${id}`,
                {
                    method: 'DELETE',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                // .then(response => response.json())
                .then(response => {
                    // console.log("filmList: ", response);
                    dispatch({
                        type: ACTIONS.REMOVE_MOVIE,
                        payload: response.ok
                    })
                })
        )
    )
}

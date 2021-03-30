import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';
import {getMovies} from './getMovies';

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
                .then(response => {
                    dispatch(getMovies([]));
                    dispatch({
                        type: ACTIONS.GET_MOVIES,
                        payload: response
                    })
                })
        )
    )
}

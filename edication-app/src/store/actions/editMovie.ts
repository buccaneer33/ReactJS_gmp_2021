import {ACTIONS} from './actionsTypes';
import {newMovieCard} from '../../common/interfaces/ApiDataInterface';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const URL = 'http://localhost:4000/movies';

export const editMovie = (movie: newMovieCard): AppThunk => {
    if (!movie) return
    return (
        (dispatch) => (
            fetch(
                `${URL}`,
                {
                    method: 'PUT',
                    headers: new Headers({ 'content-type': 'application/json' }),
                    body: JSON.stringify(movie)
                })
                .then(response => response.json())
                .then(response => {
                    // console.log("filmList: ", response);
                    let serverResponse: boolean;
                    if (response instanceof Object) {
                        if (!response.hasOwnProperty('messages')) {
                            serverResponse = true;
                        } else {
                            serverResponse = false;
                        }
                    } 
                    dispatch({
                        type: ACTIONS.EDIT_MOVIE,
                        payload: serverResponse
                    })
                })
        )
    )
    
}

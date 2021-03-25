import {ACTIONS} from './actionsTypes';
import {uploadCard} from '../../common/interfaces/ApiDataInterface';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const URL = 'http://localhost:4000/movies';

export const addMovies = (movie: uploadCard): AppThunk => {
    // console.log(movie);
    if (!movie) return

    return (
        (dispatch) => (
            fetch(
                `${URL}`,
                {
                    method: 'POST',
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
                        type: ACTIONS.ADD_MOVIE,
                        payload: serverResponse
                    })
                })
        )
    )
    
}


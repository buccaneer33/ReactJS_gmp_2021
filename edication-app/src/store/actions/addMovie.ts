import {ACTIONS} from './actionsTypes';
import {uploadCard} from '../../common/interfaces/ApiDataInterface';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';
import {getMovies} from './getMovies';

export const URL = 'http://localhost:4000/movies';


export const addMovies = (movie: uploadCard, fill: (result, response)=> void): AppThunk => {
    if (!movie) return;
    let clearResponse;

    return (
        (dispatch) => (
            fetch(
                `${URL}`,
                {
                    method: 'POST',
                    headers: new Headers({ 'content-type': 'application/json' }),
                    body: JSON.stringify(movie)
                })
                .then(response => {
                    clearResponse = response;
                    if (response.ok) {
                        return response.json();
                    } else {
                        return response.json().then(response => 
                            Promise.reject(response)
                        )
                    }
                    
                })
                .then(response => {
                    fill?.(clearResponse, response);
                    dispatch(getMovies([]));
                    dispatch({
                        type: ACTIONS.ADD_MOVIE,
                        payload: response
                    })
                })
                .catch(error => {
                    fill?.(clearResponse, error)
                })
        )
    )
    
}


import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const URL = 'http://localhost:4000/movies';

export const filterMovies = (searchParam: string, searchValue: string): AppThunk => {

    console.log('searchParam: ' + searchParam +
        ' searchValue: ' + searchValue
    );
    if (!searchParam && !searchValue) return

    return (
        (dispatch):void => {(
            fetch(
                `${URL}?searchBy=${searchParam}&filter=${searchValue}`,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => response.json())
                .then(response => {
                    console.log("filmList: ", response);
                    dispatch({
                        type: ACTIONS.FILTER_MOVIES,
                        payload: response.data
                    })
                })
        )}
    )
}

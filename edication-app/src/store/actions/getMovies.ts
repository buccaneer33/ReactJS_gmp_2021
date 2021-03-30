import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const baseURL = 'http://localhost:4000/movies';

interface ParamsProps {
    param: string;
    value: string;
}

export function getMovies (param: ParamsProps[]): AppThunk {

    let URL = baseURL + (param.length ? '?' : '');
    URL += param.map(param => {return param.value ? param.param + '=' + param.value: ''});

    return (
        (dispatch) => (
            fetch(
                URL,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => response.json())
                .then(response => {
                    // console.log("filmList: ", response);
                    dispatch({
                        type: ACTIONS.GET_MOVIES,
                        payload: response.data
                    })
                })
        )
    )
}

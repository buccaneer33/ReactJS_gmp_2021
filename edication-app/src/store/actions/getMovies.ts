import {ACTIONS} from './actionsTypes';
import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const baseURL = 'http://localhost:4000/movies';

interface ParamsProps {
    param: string;
    value: string;
}

export function getMovies (param: ParamsProps[]): AppThunk {

    const reqParam = param.map(param => {return param.value ? param.param + '=' + param.value: ''});
    const URL = baseURL + (param.length ? '?' : '') + reqParam.join('&');

    return (
        (dispatch) => (
            fetch(
                URL,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => {
                    console.log("filmList: ", response);
                    return response.json()
                })
                .then(response => {
                    console.log("filmList: ", response);
                    dispatch({
                        type: ACTIONS.GET_MOVIES,
                        payload: response.data
                    })
                })
        )
    )
}

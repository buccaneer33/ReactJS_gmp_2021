import {AppThunk} from '../../common/interfaces/ApiDataInterface';

export const baseURL = 'http://localhost:4000/movies';

export function getMoviesById (id: number): AppThunk {
    if (!id) return

    const URL = `${baseURL}/${id}`;

    return (
        (dispatch) => (
            fetch(
                URL,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => {
                    if (response.ok) {
                        return response.json().then(response => 
                            Promise.resolve(response)
                        )
                    } else {
                        return response.json().then(response => 
                            Promise.reject(response)
                        )
                    }
                })
        )
    )
}

// Actions
// const ADD_MOVIE = 'films/ADD_MOVIE';
// const REMOVE_MOVIE = 'films/REMOVE_MOVIE';
const EDIT_MOVIE = 'films/EDIT_MOVIE';
const GET_MOVIES = 'films/GET_MOVIES';
const GET_MOVES_BY_ID = 'films/GET_MOVES_BY_ID';
const UPDATE = 'films/UPDATE'
const UPDATE_CURRENT_FILM = 'films/UPDATE_CURRENT_FILM';

export const baseURL = 'http://localhost:4000/movies';

// Action Creators
export const fetchFilmsAction = () => ({
    type: GET_MOVIES,
});

export const fetchFilmsByIdAction = id => ({
    type: GET_MOVES_BY_ID,
    payload: id,
});

export const editFilmAction = film => ({
    type: EDIT_MOVIE,
    payload: film,
});
export const updateFilms = films => ({
    type: UPDATE,
    payload: films,
});
export const updateCurrentFilm = film => ({
    type: UPDATE_CURRENT_FILM,
    payload: film,
  });


export function getMovies (param) {

    const reqParam = param.map(param => {return param.value ? param.param + '=' + param.value: ''});
    const URL = baseURL + (param.length ? '?' : '') + reqParam.join('&');

    return (dispatch) => {
            dispatch(fetchFilmsAction());
            fetch(URL,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => response.json())
                .then(response => {
                    // console.log("filmList: ", response);
                    dispatch(updateFilms(response.data))
                })
            }
}

export function getMoviesById (id) {

    if (!id) return

    const URL = `${baseURL}/${id}`;

    return (dispatch) => {
            dispatch(fetchFilmsByIdAction());
            fetch(URL,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(res => res.json())
                .then(films => dispatch(updateCurrentFilm(films)));
            }
}

// Initial state

const INITIAL_STATE = {
    loading: false,
    films: []
}

// Reducer
export const filmsReduces = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                loading: true,
            };
        case GET_MOVES_BY_ID:
            return {
                ...state,
                loading: true,
            }

        case UPDATE:
            return {
                ...state,
                loading: false,
                films: action.payload,
            };
        case UPDATE_CURRENT_FILM:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        default:
            return state;
        }
  };

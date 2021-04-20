import {ThunkAction} from 'redux-thunk';
import {AnyAction} from 'redux'
import {RootState} from '../../store/store'

export interface MovieCard {
    id: number;
    title: string;
    ganre: string;
    releaseDate: string;
    movieUrl: string;
    overview: string;
    movieRating: number;
    movieDuration: number;
    movieCardUrl: string;
}

export interface ConfirmProps {
    content: string,
    buttons: {
        yes?: boolean,
        no?: boolean,
        ok?: boolean,
    }
}

export interface ModalProps {
    closeModal: () => void;
}

export interface newMovieCard {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[]
    token?:string;
}
export interface uploadCard {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
    token?:string;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export interface InputProps {
    [x: string]: any;
    name: string;
}

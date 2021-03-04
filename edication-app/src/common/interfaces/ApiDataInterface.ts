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

export interface MoviesData {
    moviesInfo: MovieCard[];
}

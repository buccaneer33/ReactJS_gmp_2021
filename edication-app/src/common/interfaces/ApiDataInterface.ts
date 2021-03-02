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

export interface ButtonProps {
    label?: string;
    rules: {
        spacing: string;
        labelColor: string;
        fontSize: string;
        border?: string;
        backgroundColor?: string;
        textTransform?: string;
        borderRadius?: string;
    }
}

export interface MoviesData {
    moviesInfo: MovieCard[];
}

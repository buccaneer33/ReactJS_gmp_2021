import React from 'react';
import {useStyles} from './styles';
import {NavigationComponent} from '../navigation/navigation.component';
import {MoviesCounterComponent} from '../moviesCounter/moviesCounter.component';
import {MovieItemComponent} from '../movieItem/movieItem.component';
import {ErrorBoundary} from '../../components/errorBoundary/errorBoundary.component';
import {newMovieCard} from '../../common/interfaces/ApiDataInterface';

interface MoviesProps {
    movies: newMovieCard[];
}

export const MoviesComponent: React.FC<MoviesProps> = ({movies}): JSX.Element => {

    const classes = useStyles();

    return (
        <div className={classes.movies}>
            <NavigationComponent />
            <ErrorBoundary>
                {(movies instanceof Array && movies.length) && <MoviesCounterComponent moviesCount={movies.length}/>}
                {(movies instanceof Array && movies.length) && <div className={classes.moviesBlock}>
                    {movies.map((item) => <MovieItemComponent key={item.id} movieCard={item}/>)}
                </div>}
            </ErrorBoundary>
        </div>
    );
}

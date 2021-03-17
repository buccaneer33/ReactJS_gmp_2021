import React from 'react';
import {stylesList} from './styles';
import {NavigationComponent} from '../navigation/navigation.component';
import {MoviesCounterComponent} from '../moviesCounter/moviesCounter.component';
import {MovieItemComponent} from '../movieItem/movieItem.component';
import {ErrorBoundary} from '../../components/errorBoundary/errorBoundary.component';
import {MovieCard} from '../../common/interfaces/ApiDataInterface';

interface MoviesProps {
    movies: MovieCard[];
}

export const MoviesComponent: React.FC <MoviesProps> = ({movies}: MoviesProps): JSX.Element => {

    const classes = stylesList();

    return (
        <div className={classes.movies}>
            <NavigationComponent />
            <ErrorBoundary>
                <MoviesCounterComponent moviesCount={movies.length}/> 
                <div className={classes.moviesBlock}>
                    {movies.map((item) => <MovieItemComponent key={item.id} movieCard={item}/>)}
                </div>
            </ErrorBoundary>
        </div>
    );
}

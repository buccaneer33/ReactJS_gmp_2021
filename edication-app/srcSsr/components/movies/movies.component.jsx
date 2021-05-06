import React from 'react';
import styles from './styles.css';
import {NavigationComponent} from '../navigation/navigation.component';
import {MoviesCounterComponent} from '../moviesCounter/moviesCounter.component';
import {MovieItemComponent} from '../movieItem/movieItem.component';
import {ErrorBoundary} from '../../components/errorBoundary/errorBoundary.component';

export const MoviesComponent = ({movies}) => {

    return (
        <div class={styles.movies}>
            <NavigationComponent />
            <ErrorBoundary>
                {(movies instanceof Array && movies.length) && <MoviesCounterComponent moviesCount={movies.length}/>}
                {(movies instanceof Array && movies.length) && <div class={styles.moviesBlock}>
                    {movies.map((item) => <MovieItemComponent key={item.id} movieCard={item}/>)}
                </div>}
                {(typeof movies === 'undefined' || (movies instanceof Array && !movies.length)) &&
                <div class={styles.noFoundBlock}>
                    <h2 class={styles.noFoundHeader}>No movies found</h2>
                </div>}
            </ErrorBoundary>
        </div>
    );
}

import React from 'react';
import {stylesList} from './styles';
import {NavigationComponent} from '../navigation/navigation.component';
import {MoviesCounterComponent} from '../moviesCounter/moviesCounter.component';
import {moviePreviewStub} from '../../appStubs/moviePreviewStub';
import {MovieItemComponent} from '../movieItem/movieItem.component';
import {ErrorBoundary} from '../../components/errorBoundary/errorBoundary.component';

const {classes} = stylesList.attach();

export class MoviesComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.movies}>
                <NavigationComponent />
                <ErrorBoundary>
                    <MoviesCounterComponent moviesInfo={moviePreviewStub}/> 
                    <div className={classes.moviesBlock}>
                        {moviePreviewStub.map((item) => <MovieItemComponent key={item.id} {...item}/>)}
                    </div>
                </ErrorBoundary>
            </div>
        );
    }
}

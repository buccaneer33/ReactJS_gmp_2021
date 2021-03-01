import React from 'react';
import {useStyles} from './styles';
import {NavigationComponent} from '../navigation/navigation.component';
import {MoviesCounterComponent} from '../moviesCounter/moviesCounter.component';
import {moviePreviewStub} from '../../appStubs/moviePreviewStub';
import {MovieItemComponent} from '../movieItem/movieItem.component';


const {classes} = useStyles.attach();

export class MoviesComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.movies}>
                <NavigationComponent />
                <MoviesCounterComponent {...moviePreviewStub}/> 
                <div className={classes.moviesBlock}>
                    {moviePreviewStub.map((item, index) => <MovieItemComponent key={index} {...item}/>)}
                </div>
            </div>
        );
    }
}

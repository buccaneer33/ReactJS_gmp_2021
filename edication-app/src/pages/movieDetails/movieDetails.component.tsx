import React from 'react';
import {useStyles} from './styles';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DetailsMovieComponent} from '../../components/detailsMovie/detailsMovie.component';
import {useSelector} from 'react-redux';



export const MovieDetailsComponent = (): JSX.Element => {

    const classes = useStyles();
    const id = 337167;

    const films = useSelector((state) => {
        return state.movieReducer
    })

    return (<>{
        <div className={classes.detailsPage}>
        {(id && films && films.length > 0 ) ? <DetailsMovieComponent id={id} /> : <HeaderComponent />}
            <MoviesComponent movies={films} />
            <FooterComponent />
    </div>
    }</>);
}

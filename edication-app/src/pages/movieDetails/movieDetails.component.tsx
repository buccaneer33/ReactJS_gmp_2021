import React from 'react';
import {useStyles} from './styles';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DetailsMovieComponent} from '../../components/detailsMovie/detailsMovie.component';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type { RootState } from '../../store/store'



export const MovieDetailsComponent = (): JSX.Element => {

    const classes = useStyles();
    const id = 337167;

    const films: TypedUseSelectorHook<RootState> = useSelector(state => state.films)

    return (<>{
        <div className={classes.detailsPage}>
        {(id && films?.length ) ? <DetailsMovieComponent id={id} /> : <HeaderComponent />}
            <MoviesComponent movies={films} />
            <FooterComponent />
    </div>
    }</>);
}

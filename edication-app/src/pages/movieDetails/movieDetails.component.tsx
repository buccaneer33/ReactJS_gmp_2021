import React from 'react';
import {useStyles} from './styles';

import {
    useParams
} from "react-router-dom";

import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DetailsMovieComponent} from '../../components/detailsMovie/detailsMovie.component';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type { RootState } from '../../store/store'

interface PageProps {
    id: number;
}

export const MovieDetailsComponent: React.FC<PageProps> = (): JSX.Element => {

    const {id} = useParams<number>();

    const classes = useStyles();

    const films: TypedUseSelectorHook<RootState> = useSelector(state => state.films)

    return (<>{
        <div className={classes.detailsPage}>
            <DetailsMovieComponent id={id} />
            <MoviesComponent movies={films} />
            <FooterComponent />
        </div>
    }</>);
}

import React from 'react';
import {useStyles} from './styles';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DetailsMovieComponent} from '../../components/detailsMovie/detailsMovie.component';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type { RootState } from '../../store/store'

interface PageProps {
    id: number;
}

export const MovieDetailsComponent: React.FC<PageProps> = ({id}): JSX.Element => {

    const classes = useStyles();

    const films: TypedUseSelectorHook<RootState> = useSelector(state => state.films)

    const isIdValid = () => {
        if (!id) {
            return false;
        }
        if (films.find(film => film.id === +id)) {
            return true;
        }
    }

    return (<>{
        <div className={classes.detailsPage}>
        {(isIdValid() && films?.length ) ? <DetailsMovieComponent id={id} /> : <HeaderComponent />}
            <MoviesComponent movies={films} />
            <FooterComponent />
    </div>
    }</>);
}

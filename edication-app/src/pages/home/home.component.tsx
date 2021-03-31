import React from 'react';
import {useStyles} from './styles';
import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type { RootState } from '../../store/store'

export const HomeComponent = (): JSX.Element => {

    const classes = useStyles();

    const films: TypedUseSelectorHook<RootState> = useSelector(state => state.films)

    return (
        <div className={classes.homePage}>
            <HeaderComponent />
            {films?.length && <MoviesComponent movies={films}/>}
            <FooterComponent />
        </div>
    );
}

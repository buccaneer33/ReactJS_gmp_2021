import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {useDispatch} from "react-redux";
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type { RootState } from '../../store/store'
import {getMovies} from '../../store/actions/getMovies';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';

interface PageProps {
    searchString: string;
}

export const NoMoviesFoundComponent: React.FC<PageProps> = ({searchString}): JSX.Element => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParam = [
            {
                param: 'search',
                value: searchString
            },
            {
                param: 'searchBy',
                value: 'title'
            }
        ]
        dispatch(getMovies(searchParam));
    }, [searchString, dispatch])

    const films: TypedUseSelectorHook<RootState> = useSelector(state => state.films);

    return (
        <div className={classes.homePage}>
            <HeaderComponent />
            <MoviesComponent movies={films} />
            <FooterComponent />
        </div>
    );
}

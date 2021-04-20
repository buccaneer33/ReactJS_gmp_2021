import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import type {RootState} from '../../store/store'
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovies} from '../../store/actions/getMovies';

export const HomeComponent = (): JSX.Element => {

    const {searchString} = useParams<string>();

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

    const films: TypedUseSelectorHook<RootState> = useSelector(state => state.films)

    return (
        <div className={classes.homePage}>
            <HeaderComponent />
            <MoviesComponent movies={films}/>
            <FooterComponent />
        </div>
    );
}

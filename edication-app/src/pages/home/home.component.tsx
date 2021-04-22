import React, {useEffect} from 'react';
import {useStyles} from './styles';
import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovies} from '../../store/actions/getMovies';
import {useAppSelector} from '../../common/hooks/hooks';

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
        ];
        dispatch(getMovies(searchParam));
    }, [searchString, dispatch])

    const films: typeof useAppSelector = useSelector(state => state.films);

    return (
        <div className={classes.homePage}>
            <HeaderComponent />
            <MoviesComponent movies={films}/>
            <FooterComponent />
        </div>
    );
}

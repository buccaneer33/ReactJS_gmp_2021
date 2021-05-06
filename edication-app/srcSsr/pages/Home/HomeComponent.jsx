import React, {useEffect} from 'react';
import styles from './styles.css';
import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovies} from '../../modules/films';

export const HomeComponent = () => {

   const {searchString} = useParams();
   console.log(searchString);

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

    const films = useSelector(state => state.films);

    return (
        <div class={styles.homePage}>
            <HeaderComponent />
            <MoviesComponent movies={films.films}/>
            <FooterComponent />
        </div>
    );
}

import React from 'react';
import styles from './styles.css';

import {
    useParams
} from "react-router-dom";

import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DetailsMovieComponent} from '../../components/detailsMovie/detailsMovie.component';
import {useSelector} from 'react-redux';


export const MovieDetailsComponent = () => {

    const {id} = useParams();

    const films = useSelector(state => state.films);

    return (
        <div className={styles.detailsPage}>
            <DetailsMovieComponent id={id} />
            <MoviesComponent movies={films.films} />
            <FooterComponent />
        </div>
    );
}

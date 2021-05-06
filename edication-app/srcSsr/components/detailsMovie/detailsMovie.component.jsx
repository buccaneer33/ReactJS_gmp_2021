import React, {useEffect} from 'react';
import styles from './styles.css';
import {useDispatch} from 'react-redux';
import { getMoviesById } from '../../modules/films';
import {useSelector} from 'react-redux';

export const DetailsMovieComponent = ({id}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesById(id));
    }, [id, dispatch]);

    const selectedFilm = useSelector(state => state.films.current);

    return (
            (<div class={styles.content}>
                <div class={styles.logo}>
                    <strong>netflix</strong>roulette
                </div>
                {selectedFilm && <div class={styles.imgBlock}>
                     <img src={selectedFilm.poster_path} alt={selectedFilm.title} class={styles.img} />
                </div>}
                {selectedFilm && <div class={styles.contentBlock}>
                     <div class={styles.contentHeaderBlock}>
                        <h2 class={styles.contentHeader}>{selectedFilm.title}</h2>
                        <span class={styles.rating}>{selectedFilm.vote_average}</span>
                    </div>
                    <div class={styles.ganreBlock}>
                        {selectedFilm.genres && selectedFilm.genres.map((ganre, index) => <span key={index}> {ganre} </span>)}
                    </div>
                    <div class={styles.infoBlock}>
                        <span class={styles.info}>{selectedFilm.release_date}</span>
                        <span class={styles.info}>{selectedFilm.runtime} min</span>
                    </div>
                    <div class={styles.overviewBlock}>
                        {selectedFilm.overview}
                    </div>
                </div>}
                <strong>{id}</strong>
            </div>
        )
    );
}

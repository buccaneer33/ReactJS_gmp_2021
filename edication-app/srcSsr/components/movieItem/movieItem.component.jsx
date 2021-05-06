import React, {useState} from 'react';
import styles from './styles.css';
import {NavLink} from "react-router-dom";

import {useDispatch} from "react-redux";

export const MovieItemComponent = ({movieCard}) => {

    const id = movieCard.id

    const [showEdit, setEditState] = useState(false);
    const [showDel, setDelState] = useState(false);
    const [showTolltip, setTolltip] = useState(false);

    const toggleTolltip = () => {
        setTolltip(!showTolltip)
    }

    return (<div class={styles.movieItem}>
                <div onClick={toggleTolltip} class={styles.control}></div>
                { showTolltip &&
                    <div class={styles.menu}>
                        <button onClick={() => setEditState(true)} class={styles.menuButton}>Edit movie</button>
                        <button onClick={() => setDelState(true)} class={styles.menuButton}>delete movie</button>
                    </div>
                }
                <NavLink class={styles.movieLink} to={`/film/${id}`}>
                    <img class={styles.movieImg} alt={movieCard.title} src={movieCard.poster_path} />
                </NavLink>
                <div class={styles.titleBlock}>
                    <span class={styles.title}>{movieCard.title}</span>
                    <span class={styles.date}>{movieCard.release_date}</span>
                </div>
                <div class={styles.ganre}>
                    {movieCard.genres.map((ganre, index) => <span key={index}> {ganre} </span>)}
                </div>
            </div>);
}

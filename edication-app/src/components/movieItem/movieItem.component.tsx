import React, {useState} from 'react';
import {useStyles} from './styles';
import {NavLink} from "react-router-dom";

import {newMovieCard} from '../../common/interfaces/ApiDataInterface';
import {EditMovieComponent} from '../modals/edit-movie/edit-movie.component';
import {ConfirmComponent} from '../modals/confirm/confirm.component';
import {ConfirmProps} from '../../common/interfaces/ApiDataInterface';
import {useDispatch} from "react-redux";
import {removeMovies} from '../../store/actions/removeMovie';

const confirmProps: ConfirmProps = {
    content: 'Are you sure you want to delete this movie',
    buttons: {
        yes: true,
        no: true
    }
}

interface MovieProps {
    movieCard: newMovieCard;
}

export const MovieItemComponent: React.FC<MovieProps> = ({movieCard}): JSX.Element => {

    const classes = useStyles();
    const id = movieCard.id

    const [showEdit, setEditState] = useState(false);
    const [showDel, setDelState] = useState(false);
    const [showTolltip, setTolltip] = useState(false);

    const toggleTolltip = (): void => {
        setTolltip(!showTolltip)
    }

    const dispatch = useDispatch();

    return (<>
        
            <div className={classes.movieItem}>
                <div onClick={toggleTolltip} className={classes.control}></div>
                { showTolltip &&
                    <div className={classes.menu}>
                        <button onClick={() => setEditState(true)} className={classes.menuButton}>Edit movie</button>
                        <button onClick={() => setDelState(true)} className={classes.menuButton}>delete movie</button>
                    </div>
                }
                <NavLink className={classes.movieLink} to={`/film/${id}`}>
                    <img className={classes.movieImg} alt={movieCard.title} src={movieCard.poster_path} />
                </NavLink>
                <div className={classes.titleBlock}>
                    <span className={classes.title}>{movieCard.title}</span>
                    <span className={classes.date}>{movieCard.release_date}</span>
                </div>
                <div className={classes.ganre}>
                    {movieCard.genres.map((ganre, index) => <span key={index}> {ganre} </span>)}
                </div>
            </div>
            { showEdit && <EditMovieComponent filmData={movieCard} closeModal={() => setEditState(false)}/> }
            { showDel && <ConfirmComponent closeModal={() => setDelState(false)} confirm={() => dispatch(removeMovies(id))} modalProps={confirmProps}/> }
    </>);
}

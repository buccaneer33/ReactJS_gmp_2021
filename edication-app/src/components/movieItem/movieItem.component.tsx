import React, {useState} from 'react';
import {useStyles} from './styles';
import {MovieCard} from '../../common/interfaces/ApiDataInterface';
import {EditMovieComponent} from '../modals/edit-movie/edit-movie.component';
import {ConfirmComponent} from '../modals/confirm/confirm.component';
import {ConfirmProps} from '../../common/interfaces/ApiDataInterface';

const confirmProps: ConfirmProps = {
    content: 'Are you sure you want to delete this movie',
    buttons: {
        yes: true,
        no: true
    }
}

interface MovieProps {
    movieCard: MovieCard;
}

export const MovieItemComponent: React.FC<MovieProps> = ({movieCard}): JSX.Element => {

    const classes = useStyles();

    const [showEdit, setEditState] = useState(false);
    const [showDel, setDelState] = useState(false);
    const [showTolltip, setTolltip] = useState(false);

    const toggleTolltip = (): void => {
        setTolltip(!showTolltip)
    }

    return (<>
        <div className={classes.movieItem}>
            <div onClick={toggleTolltip} className={classes.control}></div>
            { showTolltip &&
                <div className={classes.menu}>
                    <button onClick={() => setEditState(true)} className={classes.menuButton}>Edit movie</button>
                    <button onClick={() => setDelState(true)} className={classes.menuButton}>delete movie</button>
                </div>
            }
            <img className={classes.movieImg} alt={movieCard.title} src={movieCard.movieCardUrl} />
            <div className={classes.titleBlock}>
                <span className={classes.title}>{movieCard.title}</span>
                <span className={classes.date}>{movieCard.releaseDate}</span>
            </div>
            <div className={classes.ganre}>
                {movieCard.ganre}
            </div>
        </div>
        { showEdit && <EditMovieComponent closeModal={() => setEditState(false)}/> }
        { showDel && <ConfirmComponent closeModal={() => setDelState(false)} modalProps={confirmProps}/> }
    </>);
}

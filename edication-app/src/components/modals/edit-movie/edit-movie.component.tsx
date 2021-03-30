import React from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ModalProps, newMovieCard} from '../../../common/interfaces/ApiDataInterface';
import {useDispatch} from 'react-redux';
import {editMovie} from '../../../store/actions/editMovie';

interface errorsProps {
    id: number;
    message: string;
}
const fakeData: newMovieCard = {
    title: 'La La Land',
    tagline: 'Here is to the fools who dream.',
    vote_average: 7.9,
    vote_count: 6782,
    release_date: '2016-12-29',
    poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
    overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    budget: 30000000,
    revenue: 445435700,
    runtime: 128,
    genres: [
      'Comedy',
      'Drama',
      'Romance'
    ],
    id: 337167
}

export const EditMovieComponent: React.FC<ModalProps> = ({closeModal}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const errors: errorsProps[] = [];

    const callBack = (result, response) => {
        if (result.ok) {
            errors.length = 0;
            closeModal();
        } else {
            errors.length = 0;
            if (response?.messages) {
                response?.messages.forEach((message, index) => errors.push({id: index, message: message}))
            }
        }
    }

    const submitClick = () => {
        dispatch(editMovie(fakeData, callBack));
    }

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <div className={classes.modalContent}>
                <div className={classes.modalHeader}>
                    <h2 className={classes.title}>Edit movie</h2>
                    <button className={classes.closeButton} onClick={closeModal}>
                        <svg viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                </div>
                <div className={classes.modalBody}>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>title</label>
                        <input className={classes.input} type="text" placeholder="title here" />
                    </div>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>release date</label>
                        <input className={classes.input} type="date" placeholder="date here" />
                    </div>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>movie url</label>
                        <input className={classes.input} type="text" placeholder="movie url here" />
                    </div>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>genre</label>
                        <select className={classes.input}>
                            <option>Crime</option>
                            <option>Documentary</option>
                            <option>Horror</option>
                            <option>Comedy</option>
                        </select>
                    </div>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>overview</label>
                        <input className={classes.input} type="text" placeholder="overview here" />
                    </div>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>runtime</label>
                        <input className={classes.input} type="text" placeholder="runtime here" />
                    </div>
                </div>
                {errors?.length && <div className={classes.modalFooter}>
                   <ul>
                        {errors.map(value => <li key={value.id}>{value.message}</li>)}
                   </ul>
                </div>}
                <div className={classes.modalFooter}>
                    <button className={classes.resetButton}>reset</button>
                    <button onClick={submitClick} className={classes.submitButton}>submit</button>
                </div>
            </div>
        </aside>,
        document.body
    );
}

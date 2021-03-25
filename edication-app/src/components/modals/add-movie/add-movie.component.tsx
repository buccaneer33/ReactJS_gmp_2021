import React from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ModalProps} from '../../../common/interfaces/ApiDataInterface';
import {useDispatch} from 'react-redux';
import {addMovies} from '../../../store/actions/addMovie';
import {uploadCard} from '../../../common/interfaces/ApiDataInterface';

export const AddMovieComponent: React.FC<ModalProps> = ({closeModal}) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const fakeData: uploadCard = {
        title: 'Kin Dza Dza',
        tagline: 'Cooooo',
        vote_average: 6,
        vote_count: 7,
        release_date: '1985-02-07',
        poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/aKPifwW46ZDgs58byHCCJGb1bbx.jpg',
        overview: 'Two Soviet humans previously unknown to each other are transported to the planet Pluke in the Kin-dza-da galaxy due to a chance encounter with an alien teleportation device. They must come to grips with a language barrier and Plukian social norms (not to mention the laws of space and time) if they ever hope to return to Earth.',
        budget: 100500,
        revenue: 9,
        runtime: 100,
        genres: ['new'],
    }
    const submitClick = () => {
        dispatch(addMovies(fakeData));
        closeModal();
    }

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <div className={classes.modalContent}>
                <div className={classes.modalHeader}>
                    <h2 className={classes.title}>add movie</h2>
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
                <div className={classes.modalFooter}>
                    <button  className={classes.resetButton}>reset</button>
                    <button onClick={() => submitClick()} className={classes.submitButton}>submit</button>
                </div>
            </div>
        </aside>,
        document.body
    );
}

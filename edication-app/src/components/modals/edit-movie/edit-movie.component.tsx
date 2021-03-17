import React from 'react';
import ReactDOM from 'react-dom';
import {stylesList} from '../styles';

interface ModalProps {
    closeModal
}

export const EditMovieComponent: React.FC <ModalProps> = ({closeModal}: ModalProps) => {

    const classes = stylesList();

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
                <div className={classes.modalFooter}>
                    <button className={classes.resetButton}>reset</button>
                    <button className={classes.submitButton}>submit</button>
                </div>
            </div>
        </aside>,
        document.body
    );
}

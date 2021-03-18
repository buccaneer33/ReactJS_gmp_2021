import React from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ModalProps} from '../../../common/interfaces/ApiDataInterface';

export const LoginComponent: React.FC<ModalProps> = ({closeModal}) => {

    const classes = useStyles();

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <div className={classes.modalContent}>
                <div className={classes.modalHeader}>
                    <h2 className={classes.title}>logit</h2>
                    <button className={classes.closeButton} onClick={closeModal}>
                        <svg viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                </div>
                <div className={classes.modalBody}>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>user id</label>
                        <input className={classes.input} type="text" placeholder="user id here" />
                    </div>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>password</label>
                        <input className={classes.input} type="password" placeholder="date here" />
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

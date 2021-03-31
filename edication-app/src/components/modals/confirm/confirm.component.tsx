import React from 'react';
import ReactDOM from 'react-dom';
import {useStyles} from '../styles';
import {ConfirmProps, ModalProps} from '../../../common/interfaces/ApiDataInterface';

interface ConfModalProps extends ModalProps {
    modalProps: ConfirmProps;
    confirm?: () => void;
}

export const ConfirmComponent: React.FC<ConfModalProps>= ({modalProps, closeModal, confirm}) => {

    const classes = useStyles();

    return ReactDOM.createPortal(
        <aside className={classes.modalsOverlay}>
            <div className={classes.modalContent}>
                <div className={classes.modalHeader}>
                    <h2 className={classes.title}>delete movie</h2>
                    <button className={classes.closeButton} onClick={closeModal}>
                        <svg viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                </div>
                <div className={classes.modalBody}>
                    <div className={classes.inputItem}>
                        <label className={classes.inputLabel}>{modalProps.content}</label>
                    </div>
                </div>
                <div className={classes.modalFooter}>
                    {modalProps.buttons.yes &&
                        <><button onClick={confirm} className={classes.submitButton}>confirm</button></>}
                    {modalProps.buttons.no &&
                        <><button onClick={closeModal} className={classes.submitButton}>close</button></>}
                </div>
            </div>
        </aside>,
        document.body
    );
}

import React from 'react';
import ReactDOM from 'react-dom';
import {stylesList} from '../styles';

const {classes} = stylesList.attach();

export class DeleteMovieComponent extends React.Component {

    render(): JSX.Element {
        return ReactDOM.createPortal(
            <aside className={classes.modalsOverlay}>
                <div className={classes.modalContent}>
                    <div className={classes.modalHeader}>
                        <h2 className={classes.title}>delete movie</h2>
                        <button className={classes.closeButton} onClick={this.props.closeModal}>
                            <svg viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                            </svg>
                        </button>
                    </div>
                    <div className={classes.modalBody}>
                        <div className={classes.inputItem}>
                            <label className={classes.inputLabel}>Are you sure you want to delete this movie</label>
                        </div>
                    </div>
                    <div className={classes.modalFooter}>
                        <button className={classes.submitButton}>confirm</button>
                    </div>
                </div>
            </aside>,
            document.body
          );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import {stylesList} from '../styles';

const {classes} = stylesList.attach();

export class ConfirmComponent extends React.Component {

    constructor(props: React.Component) {
        super(props);
        console.log(this.props);
    }

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
                            <label className={classes.inputLabel}>{this.props.content.content}</label>
                        </div>
                    </div>
                    <div className={classes.modalFooter}>
                        {this.props.content.buttons.yes &&
                            <><button className={classes.submitButton}>confirm</button></>}
                        {this.props.content.buttons.no &&
                            <><button onClick={this.props.closeModal} className={classes.submitButton}>close</button></>}
                    </div>
                </div>
            </aside>,
            document.body
          );
    }
}
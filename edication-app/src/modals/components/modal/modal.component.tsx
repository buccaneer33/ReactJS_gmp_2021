import React from 'react';
import {ModalTriggerComponent} from '../modal-trigger/modal-trigger.component';
import {AddMovieComponent} from '../modal-types/add-movie/add-movie.component';
import {EditMovieComponent} from '../modal-types/edit-movie/edit-movie.component';
import {DeleteMovieComponent} from '../modal-types/delete-movie/delete-movie.component';

export class ModalComponent extends React.Component {

    MODAL_TYPES = {
        'addMovie': AddMovieComponent,
        'editMovie': EditMovieComponent,
        'delMovie': DeleteMovieComponent
    }
    component;

    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        };
        // console.log(this.props);
        this.component = this.getModal(this.props.modalProps.class)
    }

    closeModal = (): void => {
        this.setState({ isShown: false });
    };
    showModal = (): void => {
        this.setState({ isShown: true });
    };
    getModal(type): void {
        if (this.MODAL_TYPES.hasOwnProperty(type)) {
            return this.MODAL_TYPES[type];
        }
    }

    render(): JSX.Element {
        return <React.Fragment>
            <ModalTriggerComponent
                showModal={this.showModal}
                triggerProps={this.props.modalProps}
            />
            {this.state.isShown
            ?  <this.component closeModal={this.closeModal} />
            : <React.Fragment/>}
        </React.Fragment>
    }
}

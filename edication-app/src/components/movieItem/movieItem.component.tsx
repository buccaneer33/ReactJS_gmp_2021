import React from 'react';
import {stylesList} from './styles';
import {MovieCard} from '../../common/interfaces/ApiDataInterface';
import {ModalComponent} from '../../modals/components/modal/modal.component';

const editModalProps = {
    triggerText: 'edit',
    class: 'editMovie'
}
const delModalProps = {
    triggerText: 'delete',
    class: 'delMovie'
}

const {classes} = stylesList.attach();

export class MovieItemComponent extends React.Component {

    constructor(props: MovieCard) {
        super(props);
        this.state = {
            isShown: false
        };
    }

    showTolltip = (): void => {
        this.setState({isShown: !this.state.isShown})
    }

    render (): JSX.Element {
        return (
            <div className={classes.movieItem}>
                <div onClick={this.showTolltip} className={classes.control}></div>
                { this.state.isShown &&
                    <div className={classes.menu}>
                        <ModalComponent modalProps={editModalProps} />
                        <ModalComponent modalProps={delModalProps} />
                    </div>
                }
                <img className={classes.movieImg} alt={this.props.title} src={this.props.movieCardUrl} />
                <div className={classes.titleBlock}>
                    <span className={classes.title}>{this.props.title}</span>
                    <span className={classes.date}>{this.props.releaseDate}</span>
                </div>
                <div className={classes.ganre}>
                    {this.props.ganre}
                </div>
            </div>
        );
    }
}

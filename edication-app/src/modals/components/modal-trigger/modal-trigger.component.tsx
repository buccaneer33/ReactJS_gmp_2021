import React from 'react';
import {stylesList} from './styles';

const {classes} = stylesList.attach();

export class ModalTriggerComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render(): JSX.Element {
        return <button onClick={this.props.showModal} className={classes[this.props.triggerProps.class]}>
                {this.props.triggerProps.triggerText}
            </button>;
    }
}

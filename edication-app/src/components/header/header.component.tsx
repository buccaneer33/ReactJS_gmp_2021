import React from 'react';
import {stylesList} from './styles';

import {LogoComponent} from '../logo/logo.component';
import {MovieSearchComponent} from '../movieSearch/movieSearch.component';
import {ModalComponent} from '../../modals/components/modal/modal.component';

const {classes} = stylesList.attach();

export class HeaderComponent extends React.Component {

    modalProps = {
        triggerText: '+add movie',
        class: 'addMovie'
    }
    constructor(props) {
        super(props);
    }

    render (): JSX.Element {
        return (
            <div className={classes.header}>
                <div className={classes.headerUpper}>
                    <LogoComponent />
                    <div>
                        <ModalComponent modalProps={this.modalProps} />
                    </div>
                </div>
                <div className={classes.headerMain}>
                    <MovieSearchComponent />
                </div>
            </div>
        );
    }
}

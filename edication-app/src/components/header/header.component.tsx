import React from 'react';
import {stylesList} from './styles';

import {LogoComponent} from '../logo/logo.component';
import {ButtonComponent} from '../button/button.component';
import {MovieSearchComponent} from '../movieSearch/movieSearch.component';

const {classes} = stylesList.attach();

export class HeaderComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.header}>
                <div className={classes.headerUpper}>
                    <LogoComponent />
                    <ButtonComponent className={classes.button}>+add movie</ButtonComponent>
                </div>
                <div className={classes.headerMain}>
                    <MovieSearchComponent />
                </div>
            </div>
        );
    }
}

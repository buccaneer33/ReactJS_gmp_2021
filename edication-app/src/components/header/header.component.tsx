import React from 'react';
import { useStyles } from './styles';

import {LogoComponent} from '../logo/logo.component';
import ButtonComponent from '../button/button.component';
import {addMovieButton} from './button.stub';
import {MovieSearchComponent} from '../movieSearch/movieSearch.component';

const {classes} = useStyles.attach();

export class HeaderComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.header}>
                <div className={classes.headerUpper}>
                    <LogoComponent />
                    <ButtonComponent {...addMovieButton} />
                </div>
                <div className={classes.headerMain}>
                    <MovieSearchComponent />
                </div>
            </div>
        );
    }
}

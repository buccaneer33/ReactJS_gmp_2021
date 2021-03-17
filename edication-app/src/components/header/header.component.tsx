import React, {useState} from 'react';
import {stylesList} from './styles';

import {LogoComponent} from '../logo/logo.component';
import {MovieSearchComponent} from '../movieSearch/movieSearch.component';
import {AddMovieComponent} from '../modals/add-movie/add-movie.component';

export const HeaderComponent: React.FC = (): JSX.Element => {

    const classes = stylesList();

    const [modalState, setState] = useState(false);

    return (
        <div className={classes.header}>
            <div className={classes.headerUpper}>
                <LogoComponent />
                <button className={classes.button} onClick={() => setState(true)}>+Add Movie</button>
            </div>
            <div className={classes.headerMain}>
                <MovieSearchComponent />
            </div>
            { modalState && <AddMovieComponent closeModal={() => setState(false)}/> }
        </div>
    );
}

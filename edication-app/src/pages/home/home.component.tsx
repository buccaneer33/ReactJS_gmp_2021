import React from 'react';
import {useStyles} from './styles';
import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {useSelector} from 'react-redux';

export const HomeComponent = (): JSX.Element => {

    const classes = useStyles();

    const films = useSelector((state) => {
        return state.movieReducer
    })

    return (
        <div className={classes.homePage}>
            <HeaderComponent />
            {(films instanceof Array && films.length) && <MoviesComponent movies={films}/>}
            <FooterComponent />
        </div>
    );
}

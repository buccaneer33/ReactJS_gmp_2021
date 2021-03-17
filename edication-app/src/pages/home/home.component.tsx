import React, {useContext} from 'react';
import {stylesList} from './styles';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DataContext} from '../../App/app';

export const HomeComponent = (): JSX.Element => {

    const classes = stylesList();
    const value = useContext(DataContext)

    return (
        <div className={classes.homePage}>
            <HeaderComponent />
            <MoviesComponent movies={value}/>
            <FooterComponent />
        </div>
    );
}

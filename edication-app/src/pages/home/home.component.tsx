import React from 'react';
import {stylesList} from './styles';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';

const {classes} = stylesList.attach();

export class HomeComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.homePage}>
                <HeaderComponent />
                <MoviesComponent />
                <FooterComponent />
            </div>
        );
    }
}

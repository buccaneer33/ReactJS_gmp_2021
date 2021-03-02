import React from 'react';
import {stylesList} from './styles';
import {HomeComponent} from '../pages/home/home.component';

const {classes} = stylesList.attach();

export const App: React.FC = () => {
    return (
        <div className={classes.AppComponent}>
            <HomeComponent />
        </div>
    );
}

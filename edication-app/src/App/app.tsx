import React from 'react';
import {useStyles} from './styles';
import {HomeComponent} from '../pages/home/home.component';

const {classes} = useStyles.attach();

export function App():JSX.Element {
    return (
        <div className={classes.AppComponent}>
            <HomeComponent />
        </div>
    );
}

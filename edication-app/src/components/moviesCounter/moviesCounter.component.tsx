import React from 'react';
import {stylesList} from './styles';
import { MoviesData } from '../../common/interfaces/ApiDataInterface';

export const MoviesCounterComponent = (props:MoviesData): JSX.Element => {
    const classes = stylesList();
    return (
        <div className={classes.block}>{props.moviesInfo.length}<span> movies found</span></div>
    );
}

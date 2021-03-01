import React from 'react';
import {useStyles} from './styles';
import { MoviesArray } from '../../common/interfaces/ApiDataInterface';

export const MoviesCounterComponent = (props:MoviesArray): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.block}>{props.moviesInfo.length}<span> movies found</span></div>
    );
}

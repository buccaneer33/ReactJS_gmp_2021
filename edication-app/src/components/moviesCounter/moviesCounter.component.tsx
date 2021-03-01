import React from 'react';
import {useStyles} from './styles';
import {MovieCard} from '../../common/interfaces/ApiDataInterface';

export const MoviesCounterComponent = (props: MovieCard[]): JSX.Element => {
    const classes = useStyles();
    console.log(props); // OBJECT ???
    return (
        <div className={classes.block}>{props.length}<span>movies found</span></div>
    );
}

import React, {useState} from 'react';
import {useStyles} from './styles';

interface CountProps {
    moviesCount: number;
}
export const MoviesCounterComponent: React.FC<CountProps> = ({moviesCount}): JSX.Element => {
    const classes = useStyles();

    const [count] = useState(moviesCount);

    return (<div className={classes.block}>{count}<span> movies found</span></div>);
}

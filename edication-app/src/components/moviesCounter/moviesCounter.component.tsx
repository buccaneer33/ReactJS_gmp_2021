import React, {useState} from 'react';
import {stylesList} from './styles';

interface CountProps {
    moviesCount: number;
}
export const MoviesCounterComponent: React.FC <CountProps> = ({moviesCount}: CountProps): JSX.Element => {
    const classes = stylesList();

    const [count] = useState(moviesCount);

    return (<div className={classes.block}>{count}<span> movies found</span></div>);
}

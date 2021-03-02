import React from 'react';
import {stylesList} from './styles';

export const ErrorBoundary = (props: JSX.ElementChildrenAttribute): JSX.Element => {
    const classes = stylesList();
    const isEverythingOk = true;

    return isEverythingOk 
        ? <>{props.children}</>
        : <><h2 className={classes.error}>
            Something went wrong
        </h2></>
}

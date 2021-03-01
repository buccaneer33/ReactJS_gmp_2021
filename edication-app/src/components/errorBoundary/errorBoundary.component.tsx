import React from 'react';
import {useStyles} from './styles';

function ErrorBoundary(props: JSX.ElementChildrenAttribute): JSX.Element {
    const classes = useStyles();
    const error = () => (
        <h2 className={classes.error}>
            Something went wrong
        </h2>
    );
    const isEverythingOk = true;

    return <>{isEverythingOk ? props.children : <>{error()}</>} </>
}
export default ErrorBoundary

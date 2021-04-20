import React from 'react';
import {useStyles} from '../styles';
import {FieldMetaProps} from 'formik';

interface ErrorProps {
    meta: FieldMetaProps<string>;
}

export const ErrorField: React.FC<ErrorProps> = ({ meta }): JSX.Element => {

    const classes = useStyles();
    return (
      <>
        {(meta?.touched && meta?.error) && (<div className={classes.fieldError}>{meta.error}</div>)}
      </>
    );
};

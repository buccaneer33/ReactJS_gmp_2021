import React from 'react';
import {useField} from 'formik';
import {PropsType} from '../../../common/interfaces/ApiDataInterface';
import {useStyles} from '../styles';

export const DateField = ({ label, placeholder, ...props }:PropsType): JSX.Element => {

    const classes = useStyles();
    const [field, meta, name] = useField(props);
    return (
      <>
        <label className={classes.inputLabel}>{label}</label>
        <input name={name} className={classes.dateItem} placeholder={placeholder} {...field} {...props} />
        {meta.touched && meta.error ? (<div className={classes.fieldError}>{meta.error}</div>) : null}
      </>
    );
};

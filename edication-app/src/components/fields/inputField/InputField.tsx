import React from 'react';
import {useField} from 'formik';
import {InputProps} from '../../../common/interfaces/ApiDataInterface';
import {useStyles} from '../styles';
import {ErrorField} from '../fieldError/FieldError';

export const InputField: React.FC<InputProps> = ({ label, ...props }): JSX.Element => {

    const classes = useStyles();
    const [field, meta, name, ] = useField(props);
    return (
      <>
        <label className={classes.inputLabel}>{label}</label>
        <input name={name} className={classes.inputItem} {...field} {...props} />
        <ErrorField meta={meta}/>
      </>
    );
};

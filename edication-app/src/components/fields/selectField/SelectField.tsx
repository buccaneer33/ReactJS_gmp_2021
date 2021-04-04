import React from 'react';
import {PropsType} from '../../../common/interfaces/ApiDataInterface';
import {useStyles} from '../styles';
import {FieldProps} from 'formik';
import Select, { Option, ReactSelectProps, ValueType } from 'react-select'

export const SelectField: React.JSXElementConstructor<ReactSelectProps & FieldProps> = ({
    options,
    field,
    form,
    label,
    isMulti = true,
 }:PropsType) => {

    const classes = useStyles();

    const onChange = (option: ValueType<Option | Option[]>) => {
        form.setFieldValue(
            field.name,
            isMulti
            ? (option as Option[]).map((item: Option) => item.value)
            : (option as Option).value
        );
    };
    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter(option => field.value.indexOf(option.value) >= 0)
                : options.find(option => option.value === field.value);
        } else {
          return isMulti ? [] : ("" as any);
        }
    };
    return (
      <>
        <label className={classes.inputLabel}>{label}</label>
        <Select
            name={field.name}
            value={getValue()}
            isMulti={isMulti}
            options={options}
            onChange={onChange}
            onBlur={field.onBlur}
        />
      </>
    );
};
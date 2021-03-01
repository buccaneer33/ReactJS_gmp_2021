import React from 'react';
import {createUseStyles} from 'react-jss';
import {Button} from '../../common/interfaces/ApiDataInterface';

const useStyles = createUseStyles({
    myButton: props => ({
      padding: props.spacing,
      border: props.border,
      backgroundColor: props.backgroundColor,
      borderRadius: props.borderRadius
    }),
    myLabel: props => ({
      display: 'block',
      color: props.labelColor,
      fontSize: props.fontSize,
      textTransform: props.textTransform
    })
  })

const ButtonComponent = (props: Button): JSX.Element => {
    const classes = useStyles(props.rules)
    return (
        <button className={classes.myButton}>
            <span className={classes.myLabel}>{props.label}</span>
        </button>
    );
}
ButtonComponent.defaultProps = {
    spacing: 10,
    fontWeight: 'bold',
    labelColor: '#F65261',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'transparent',
    textDecoration: 'uppercase'
}

export default ButtonComponent;

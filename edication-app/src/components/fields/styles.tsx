import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    inputItem: {
        height: '75px',
        display: 'flex',
        padding: '10px'
    },
    inputLabel: {
        color: '#F65261',
        fontSize: '19px',
        textTransform: 'uppercase'
    },
    input: {
        height: '35px',
        padding: '5px',
        backgroundColor: '#555555',
        borderRadius: '5px',
        color: '#FFFFFF',
        fontSize: '19px'
    },
    fieldError: {
        color: '#F65261'
    }
});

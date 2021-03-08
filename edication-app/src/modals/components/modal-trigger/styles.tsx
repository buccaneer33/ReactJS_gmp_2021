import {jss} from 'react-jss'

export const stylesList = jss.createStyleSheet({
    addMovie: {
        padding: '5px 15px',
        color: '#F65261',
        fontSize: '19px',
        backgroundColor: 'rgba(85, 85, 85, 0.7)',
        textTransform: 'uppercase',
        border: '1px solid transparent',
        borderRadius: '5px'
    },
    editMovie: {
        display: 'block',
        width: '100%',
        height: '50px',
        backgroundColor: '#232323',
        color: '#FFFFFF',
        fontSize: '19px',
        border: "none",

        '&:hover': {
            backgroundColor: '#F65261',
        }
    },
    delMovie: {
        display: 'block',
        width: '100%',
        height: '50px',
        backgroundColor: '#232323',
        color: '#FFFFFF',
        fontSize: '19px',
        border: "none",

        '&:hover': {
            backgroundColor: '#F65261',
        }
    }
});

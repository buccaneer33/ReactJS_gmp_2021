import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    title: {
        color: '#FFFFFF',
        fontSize: '40px',
        margin: '0',
        textTransform: 'uppercase',
        flexBasis: '100%'
    },
    search: {
        flexBasis: '100%'
    },
    searchInput: {
        height: '40px',
        backgroundColor: 'rgba(85, 85, 85, 0.5)',
        borderRadius: '5px',
        border: '1px solid transparent',
        width: '600px',
        padding: '5px 10px',
        fontSize: '24px'
    },
    button: {
        padding: '10px',
        color: '#FFFFFF',
        fontSize: '24px',
        backgroundColor: '#F65261',
        textTransform: 'uppercase',
        border: '1px solid #F65261',
        borderRadius: '5px'
    }
});


import {jss} from 'react-jss'

export const useStyles = jss.createStyleSheet({
    nav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '30px',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#232323',
        color: '#F65261',
        fontSize: '19px',
        borderBottom: '1px solid #555555',
        padding: '5px 0',
    },
    menu: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            listStyle: 'none',
            margin: '0',
            padding: '0',
    },
    item: {
        padding: '0 5px',
        margin: '0 5px'
    },
    link: {
        color: '#FFFFFF',
        cursor: 'pointer',
        textTransform: 'uppercase',
        textDecoration: 'none'
    }
});

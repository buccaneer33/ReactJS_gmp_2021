import {jss} from 'react-jss'

export const stylesList = jss.createStyleSheet({
    header: {
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#232323',
        padding: '20px 50px',
        boxSizing: 'border-box',
        marginBottom: '5px'
    },
    headerUpper: {
        width: '100%',
        height: '45px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerMain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '25px'
    },
    button: {
        padding: '5px 15px',
        color: '#F65261',
        fontSize: '19px',
        backgroundColor: 'rgba(85, 85, 85, 0.7)',
        textTransform: 'uppercase',
        border: '1px solid transparent',
        borderRadius: '5px'
    }
});

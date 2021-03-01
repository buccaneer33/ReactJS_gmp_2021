import {jss} from 'react-jss'

export const useStyles = jss.createStyleSheet({
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
    }
});

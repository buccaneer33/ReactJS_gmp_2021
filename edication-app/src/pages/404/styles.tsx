import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '90vh',
        width: '100%',
        padding: '50px 0'
    },
    pageBody: {
        width: '100%',
        height: '100%',
        minHeight: 'calc(100vh - 180px)',
        display: 'flex',
        padding: '20px 50px',
        maxWidth: '1200px',
        boxSizing: 'border-box',
        marginBottom: '5px',
        flexDirection: 'column',
        backgroundColor: '#232323'
    },
    content: {
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: 'white',
        fontSize: '32px'
    },
    image: {

    },
    button: {
        borderRadius: '5px',
        backgroundColor: 'transparent',
        border: '1px solid #F65261',
        fontSize: '25px',
        color: '#F65261',
        textTransform: 'uppercase',
        padding: '10px'
    }
});

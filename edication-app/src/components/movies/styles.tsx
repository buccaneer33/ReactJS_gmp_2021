import {createUseStyles} from 'react-jss'

export const stylesList = createUseStyles({
    movies: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#232323',
        color: '#F65261',
        fontSize: '19px',
        flexGrow: '1',
        boxSizing: 'border-box',
        padding: '0 50px'
    },
    moviesBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: '1200px',
        flexGrow: '1',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
        paddingTop: '25px'
    }
});

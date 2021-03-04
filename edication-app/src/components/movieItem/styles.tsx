import {createUseStyles} from 'react-jss'

export const stylesList = createUseStyles({
    movieItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '560px',
        width: '360px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '19px',
        boxSizing: 'border-box',
        padding: '15px'
    },
    movieImg: {
        width: '100%',
        height: '85%',
        backgroundColor: '#000055'
    },
    titleBlock: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '10px'
    },
    title: {
        fontSize: '20px'
    },
    date: {
        fontSize: '16px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '5px',
        padding: '3px 8px'
    },
    ganre: {
        fontSize: '16px',
        padding: '3px 0'
    }
});

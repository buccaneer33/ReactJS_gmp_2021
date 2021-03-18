import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
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
        padding: '15px',
        position: 'relative'
    },
    control: {
        position: 'absolute',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        top: '4%',
        right: '6%',
        border: '2px solid rgba(255, 255, 255, 0.5)',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    menu: {
        display: 'block',
        position: 'absolute',
        width: '160px',
        height: '100px',
        backgroundColor: '#232323',
        right: '22px',
        top: '70px',
        paddingTop: '25px'
    },
    menuButton: {
        display: 'block',
        width: '160px',
        height: '50px',
        backgroundColor: '#232323',
        color: '#FFFFFF',
        fontSize: '19px',
        border: "none",

        '&:hover': {
            backgroundColor: '#F65261',
        }
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

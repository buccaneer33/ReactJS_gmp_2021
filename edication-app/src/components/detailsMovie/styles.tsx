import {createUseStyles} from 'react-jss'

export const stylesList = createUseStyles({
    content: {
        display: 'flex',
        flexDirection: 'row',
        height: '400px',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#232323',
        padding: '20px 50px',
        boxSizing: 'border-box',
        marginBottom: '5px',
        flexWrap: 'wrap'
    },
    logo: {
        height: '25px',
        color: '#F65261',
        fontSize: '19px',
        padding: '0',
        margin: '0',
        flexGrow: '10',
        width: '100%'
    },
    imgBlock: {
        height: 'calc(100% - 25px)',
        width: '30%',
    },
    img: {
        height: '100%',
        width: '100%'
    },
    contentBlock: {
        height: 'calc(100% - 25px)',
        width: '70%',
        padding: '3rem 2rem',
        boxSizing: 'border-box'
    },
    contentHeaderBlock: {
        display: 'flex',
        flexDirection: 'row'
    },
    contentHeader: {
        color: '#FFFFFF'
    },
    rating: {
        color: '#55FF55',
        border: '1px solid #FFFFFF',
        padding: '1rem',
        borderRadius: '50%',
        marginLeft: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '2rem',
        width: '2rem',
        display: 'flex',
    },
    ganreBlock: {
        padding: '3px 0',
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    infoBlock: {

    },
    info : {
        color: '#F65261',
        padding: '0 1rem 0 0',
        fontSize: '16px'
    },
    overviewBlock: {
        padding: '3px 0',
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.5)'
    }

});

import {createUseStyles} from 'react-jss'

export const stylesList = createUseStyles({
    modalsOverlay: {
        display: 'flex',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '90',
        background: 'rgba(0,0,0, .5)',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalContent:{
        background: '#232323',
        padding: '20px',
        borderRadius: '3px',
        width: '40%',
        minHeight: '20%'
    },
    modalHeader:{
        width: '100%',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    },
    title: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontSize: '24px',
        fontWeight: '300',
        margin: '0',
        padding: '5px 0'
    },
    closeButton: {
        width: '25px',
        height: '25px',
    },
    modalBody: {
        width: '100%',
        height: '90%'
    },
    inputItem: {
        height: '75px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    },
    inputLabel: {
        color: '#F65261',
        fontSize: '19px',
        textTransform: 'uppercase'
    },
    input: {
        height: '35px',
        padding: '5px',
        backgroundColor: '#555555',
        borderRadius: '5px',
        color: '#FFFFFF',
        fontSize: '19px'
    },
    modalFooter: {
        height: '35px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end'
    },
    resetButton: {
        height: '35px',
        border: '1px solid #F65261',
        color: '#F65261',
        borderRadius: '5px',
        background: '#232323',
        fontSize: '19px',
        margin: '0 5px'
    },
    submitButton: {
        height: '35px',
        border: '1px solid #F65261',
        backgroundColor: '#F65261',
        borderRadius: '5px',
        fontSize: '19px',
        margin: '0 5px'
    },
})

import {jss} from 'react-jss'

export const useStyles = jss.createStyleSheet({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#424242',
        color: '#F65261',
        fontSize: '19px',
        boxSizing: 'border-box'
    }
});


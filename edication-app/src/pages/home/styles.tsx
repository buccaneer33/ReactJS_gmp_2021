import {jss} from 'react-jss'

export const useStyles = jss.createStyleSheet({
    homePage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '90vh',
        width: '100%',
        padding: '50px 0'
    }
});

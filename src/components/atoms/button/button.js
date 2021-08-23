import { makeStyles } from '@material-ui/core';
import MUIButton from '@material-ui/core/Button'

const useStyles = makeStyles({
    root:{
    }
});

function Button(props) {
    const classes = useStyles();

    const { variant, children='Button', ...rest } = props;
    return (
        <MUIButton data-testid="button"
            className={classes.root}
            variant={variant} 
            {...rest}>
        {children}
        </MUIButton>
    )
}

export default Button;
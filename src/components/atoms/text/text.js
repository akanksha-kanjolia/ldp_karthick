import Typography from '@material-ui/core/Typography';

function Text(props) {
    const { variant, children='Text', ...rest } = props
    return (
        <Typography data-testid = "text" variant={variant} {...rest}>{children}</Typography>
    )
}

export default Text
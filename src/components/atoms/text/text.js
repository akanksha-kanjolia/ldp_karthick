import Typography from '@material-ui/core/Typography';

function Text(props) {
    const { variant, children='Text', ...rest } = props
    return (
        <Typography variant={variant} {...rest}>{children}</Typography>
    )
}

export default Text
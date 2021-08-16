import MUIButton from '@material-ui/core/Button'

function Button(props) {
    const { variant, children='Button', ...rest } = props;
    return (
        <MUIButton 
            variant={variant} 
            {...rest}>
        {children}
        </MUIButton>
    )
}

export default Button;
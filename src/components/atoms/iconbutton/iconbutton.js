import MUIButton from '@material-ui/core/IconButton'

function IconButton(props) {
    const { children } = props;
    return (
        <MUIButton>{children}
        </MUIButton>
    )
}

export default IconButton;
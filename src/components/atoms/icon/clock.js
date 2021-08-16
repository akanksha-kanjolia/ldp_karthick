

function Clock(props) {
    const { src, ...rest } = props
    return (
        <img src={src}{...rest}></img>
    )
}

export default Clock
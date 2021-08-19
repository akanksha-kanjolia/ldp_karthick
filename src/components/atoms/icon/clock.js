

function Clock(props) {
    const { src="https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg", ...rest } = props
    return (
        <img src={src}{...rest} alt="clock"></img>
    )
}

export default Clock
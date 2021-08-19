import React, {useEffect} from 'react'

function Detail({match}) {
    
    useEffect(() => {
        console.log(match);
    }, [])

    return (
        <div>
            <h1>Welcome to detail page</h1>
        </div>
    )
}

export default Detail;

import React from 'react';
import Button from '../../atoms/button/button';

function Middle(props) {
    const { children1, children2, children3} = props;
    return (
        <div id='middle'>
            <Button>{children1}</Button>
            <Button>{children2}</Button>
            <Button>{children3}</Button>
        </div>
    )
}

export default Middle
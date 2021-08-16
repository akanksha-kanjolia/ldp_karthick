import React from 'react';
import Button from '../../atoms/button/button';

function Right(props){
    const {children1, children2} = props;
    return (
        <div id='right'>
            <Button>{children1}</Button>
            <Button>{children2}</Button>
        </div>
    )
}

export default Right
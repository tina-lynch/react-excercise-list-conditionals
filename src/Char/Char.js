import React from 'react';


const char = (props) => {
    return (
        <div className='Char' onClick={props.click}>
            {props.letter}
        </div>
        )
}

export default char;
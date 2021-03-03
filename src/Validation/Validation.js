import React from 'react';


const validation = (props) => {

    return(
        <div>
            {
                props.length < 5 ?
                <p>Text is less than 5 characters</p> :
                <p>Text is long enough</p>
            }
        </div>
    )
 
   
   
}

export default validation;
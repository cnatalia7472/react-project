import React from 'react';

const Conditional = () => {

    const returnValue = () => {
        return true;
    }

    const showIt = () => {
        return (
            returnValue() ? 
            <div>
                It's true
            </div>
            :
            <div>
                It's false
            </div>
        )
    }

    return (
        <div>
            { showIt() }
        </div>
    )
}

export default Conditional;
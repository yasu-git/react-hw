import React from 'react'
import TextP from './TextP'

const Explanation = (props) => {
    return (
        <div>
            <h3>説明</h3>
            <hr />
            <TextP text={props.description} />
        </div>
    )
}

export default Explanation

import React from 'react'

const References = (props) => {
    return (
        <div>
            <h1>References</h1>
            <p><a href={`https://${props.reference1}`}>LinkendIn</a></p>
            <p><a href={`https://${props.reference2}`}>GitHub</a></p>
        </div>
    )
}

export default References
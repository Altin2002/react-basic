import React, { useState } from 'react'
import './user.scss'

const State = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        setColor(!color)
    }

    return (
        <div className='state'>
            <button onClick={changeColor} type='button'>Change Text Color</button>
            <h1 className={color ? 'green' : ''}>Change my color</h1>
        </div>
    )
}

export default State
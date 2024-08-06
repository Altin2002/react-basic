import React, { useState } from 'react'
import './user.scss'

const Popup = () => {
    const [popup, setPopup] = useState(false);

    const showPopup = () => {
        setPopup(!popup)
    }


    const closePopup = () => {
        setPopup(false)
    }
    return (
        <div className='popup'>
            
            {popup ? <div className='backdrop' onClick={closePopup}></div> : null}
            

            <button onClick={showPopup} type='button'>Show Popup</button>

            {popup ?
                <div className='card'>
                    <h1>Popup</h1>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <p>Lorem ipsum dolor sit amet...</p>

                </div> : null

            }


        </div>
    )
}

export default Popup
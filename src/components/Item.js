import React from 'react'

const Item = ({icon, title, description}) => {
    return (
        <div className='item'>
            <div className='icon'>
                {icon}
            </div>
            <div> 
               <h6>{title}</h6> 
            </div>
            <div>
                {description}
            </div>
        </div>

    )
}

export default Item
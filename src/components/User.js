import React from 'react'
import {Data} from './data.js'
import './user.scss'
import Item from './Item.js'

const User = () => {
  return (
    <div className='user'>
        {Data.map((d, i) => {
            return(
               <Item 
                key={i} {...d}
               />
            )
        })}
    </div>
  )
}

export default User
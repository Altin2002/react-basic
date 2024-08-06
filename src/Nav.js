import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
import { AiFillApple } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProductsMegamenu from './components/ProductsMegamenu'
import { BsTriangleFill } from 'react-icons/bs'



const Nav = () => {
    return (
        <div className='nav'>


            <Link to='/' className='title'><AiFillApple className='svg' /> Title</Link>


            <div className='links'>
                <div className='nav-link'>
                    <Link to='/' className='inner-link'>Products <MdKeyboardArrowDown className='svg'/></Link>
                    <BsTriangleFill className='arrow' />
                    <ProductsMegamenu />
                </div>

                <div className='nav-link'>
                    <Link to='/blog' className='inner-link'>Blog</Link>
                </div>

                <div className='nav-link'>
                    <Link to='/about' className='inner-link'>About Us</Link>
                </div>

                <div className='nav-link'>
                    <Link to='/support' className='inner-link'>Support</Link>
                </div>
            </div>

            <div className='auth'>
                <Link to='/'>Log In</Link>
                <Link to='/' className='signup'>Sign Up</Link>
            </div>

        </div>
    )
}

export default Nav
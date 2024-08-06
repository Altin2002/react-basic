import React from 'react'
import './footer.scss'
import { FooterData } from './data'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            {FooterData.map((props) => {
                return (
                    <div className='col'>
                        <h6>{props.category}</h6>
                        <div className='links'>
                            {props.links.map((l) => {
                                return (
                                    <Link key={l.to} to={l.to}>{l.link}</Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Footer
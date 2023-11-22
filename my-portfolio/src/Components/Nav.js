import React from 'react'
import NavItems from './NavItems'

function Nav(props) {
    const { children, href } = props
    return (
        <nav>
            <ul className='NavItems flex flex-row items-center'>
            <hr className='w-8 float-left mr-2 invisible lg:visible'/><NavItems href={href}>{children}</NavItems>
            </ul>
        </nav>
    )
}

export default Nav
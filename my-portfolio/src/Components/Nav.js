import React from 'react'
import NavItems from './NavItems'

function Nav(props) {
    const {children, href} = props
    return (
        <nav>
            <ul className='NavItems flex flex-row items-center mr-5'>
            <hr className='w-8 float-left mr-2'/><NavItems href = {href}>{children}</NavItems>
            </ul>
        </nav>
    )
}

export default Nav
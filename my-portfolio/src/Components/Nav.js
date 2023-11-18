import React from 'react'
import NavItems from './NavItems'

function Nav(props) {
    const {children, href} = props
    return (
        <nav>
            <ul className='NavItems'>
                <NavItems  href = {href}>{children}</NavItems>
            </ul>
        </nav>
    )
}

export default Nav
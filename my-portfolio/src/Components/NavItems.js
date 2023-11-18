import React from 'react'

function NavItems(props) {
    const {href, children} = props
    return (
        <li className='mr-10 my-5'><a href={href}>{children}</a></li>
    )
}

export default NavItems
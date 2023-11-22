import React from 'react'

function NavItems(props) {
    const {href, children} = props
    return (
       <li className='-ml-10 lg:ml-0 mr-5'><a href={href}>{children}</a></li>
    )
}

export default NavItems
import React from 'react'

function NavItems(props) {
    const {href, children} = props
    return (
       <li className='-ml-8 mr-5 mt-4 lg:mt-4'><a href={href}>{children}</a></li>
    )
}

export default NavItems
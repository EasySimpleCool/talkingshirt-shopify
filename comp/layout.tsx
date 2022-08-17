import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            this is at the top
            {children}
            this is at the bottom
        </div>
    )
}

export default Layout
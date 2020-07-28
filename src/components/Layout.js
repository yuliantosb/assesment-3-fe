import React from 'react'

function Layout(props) {
    return (
        <div>
            <h1>Perpustakaan</h1>
            {
                props.children
            }
        </div>
    )
}

export default Layout

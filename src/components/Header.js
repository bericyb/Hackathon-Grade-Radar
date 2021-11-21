import React from 'react'

const Header = ({ text }) => {
    return (
        <div className="App-header">
            <h1>{text}</h1>
        </div>
    )
}

Header.defaultProps = {
    text:"TODO:"
}

export default Header

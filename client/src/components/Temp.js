import React from 'react'
import { Link } from 'react-router-dom'
const Temp = () => {
    return (
        <div>
            <h1>404: Not a proper url you are supposed to be on</h1>
            <nav><Link to="/">Back to Homepage</Link></nav>
        </div>
    )
}

export default Temp
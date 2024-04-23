import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <h2>Welcome</h2>
            <Link to="/admin">Admin</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default Home
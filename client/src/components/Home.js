import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

//App's main page with links to other pages

const Home = () => {

    return (
        <div className='Home'>
            <h2>Homepage</h2>
            <br></br><br></br><br></br>
            <div>


            </div>
            <nav>
                <Link to="/snippets"> Check out Snippets</Link><br></br><br></br>
                <Link to="/register"> Make a new user</Link><br></br><br></br>
                <Link to="/login"> Already have an account? Login</Link><br></br><br></br><br></br><br></br>
                <Footer></Footer>
            </nav>
        </div>


    )
}

export default Home
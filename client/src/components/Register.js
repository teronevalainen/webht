import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Register = () => {

    const [userData, setuserData] = useState({});
    //typical registration to database
    const submit = (event) => {
        event.preventDefault();

        fetch("/user/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }
    const ChangeHandle = (event) => {
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }


    return (
        //creating registration form
        <div className='Register'>
            <h2>Register</h2>

            <form className='RegisterForm' onSubmit={submit} onChange={ChangeHandle}>
                <input className='inputs' type="text" name="email" placeholder='Email'></input><br></br>
                <input className='inputs' type="text" name="username" placeholder='Username'></input><br></br>
                <input className='inputs' type="password" name="password" placeholder='Password'></input><br></br>
                <input className='btn' type="submit" value="Register"></input>
            </form> <br></br>
            <nav>
                <Link to="/">Back</Link>
            </nav>

        </div>
    )
}

export default Register
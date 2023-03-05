import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Buffer } from 'buffer';

export const Login = ({ setJwt, setUser, jwt }) => {
    const [userData, setuserData] = useState([]);
    //typical login with token
    const submit = (event) => {
        event.preventDefault();

        fetch("/user/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                if (data.token) {       //Authentication if login is successfull
                    setJwt(data.token)
                    setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))
                }
            });
    }
    const ChangeHandle = (event) => {
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }


    return (
        //Login inputs and logging in
        <div className='Login'>

            {jwt ? "" : <>

                <h2>Login</h2>

                <form className='LoginForm' onSubmit={submit} onChange={ChangeHandle}>

                    <input className='inputs' type="text" name="username" placeholder='Username'></input><br></br>
                    <input className='inputs' type="password" name="password" placeholder='Password'></input><br></br>
                    <input className='btn' type="submit" value="Login"></input>
                </form>
            </>}
            <br></br>
            <nav>
                <Link to="/">Back</Link>
            </nav>

        </div>
    )
}

export default Login
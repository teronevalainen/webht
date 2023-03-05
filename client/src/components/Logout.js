import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
const Logout = ({ jwt }) => {
    localStorage.removeItem("auth_token");
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            window.location.reload();
            navigate('/')
        }, 2000)
    },)
    return (
        <div>
            {jwt ? <>
                <h2 className='header'>Logged Out</h2> </> :
                <h2 className='header'>You are not signed in</h2>
            }

        </div>
    )
}

export default Logout
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NewSnippet = ({ jwt }) => {

    const [snippet, setSnippet] = useState([])

    //Typical fetch and making new user post
    const submit = (e) => {
        e.preventDefault();
        fetch("/api/snippets", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(snippet),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data + " newsnip fetch")
            })
        console.log("User has submitted a new post")
        console.log(snippet)
    }
    const ChangeHandle = (e) => {
        setSnippet({ ...snippet, [e.target.name]: e.target.value })
    }

    return (
        //Creating a new snippet form, where user submits his/her snippet
        <div className='newSnippet'>
            {jwt ? <>
                <h2>Add a new Snippet</h2>
                <form className='NewSnippetForm' onSubmit={submit} onChange={ChangeHandle}>
                    <input className='inputs' type="text" name="title" placeholder='Title'></input><br />
                    <input className='inputs' type="text" name="username" placeholder='Username'></input><br />
                    <textarea className='inputs' name="code" placeholder='Put your code here'></textarea><br />
                    <input className='inputs' type="text" name="text" placeholder='Freeform text about the issue'></input><br />
                    <input className='btn' type="submit" value="Add"></input>
                </form>
                <br></br>
            </> :
                <><h4 className='header'>Login to post a new Snippet</h4><br></br>
                </>
            }
            <nav>
                <Link to="/login">Login </Link><br></br><br></br>
                <Link to="/">Back to home </Link>
            </nav>
        </div>
    )
}

export default NewSnippet
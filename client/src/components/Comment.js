import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react';


const Comment = ({ jwt, snip }) => {
    //const navigate = useNavigate();
    const { id } = useParams();

    const [newComment, setNewComment] = useState(null);
    let commentInputValue = useRef(null);       //current comment value

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("/api/comment/" + id)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [id]);



    const submit = (e) => {
        e.preventDefault();
        fetch("/api/comment/" + id, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newComment),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                commentInputValue.current.value = "";

                console.log(data + " newcomment fetch")
            })
        console.log("User has submitted a new Comment")
        console.log(newComment)
    }

    const onChange = () => {
        //New comment text
        setNewComment({
            commentText: commentInputValue.current.value
        })


    }
    /*const aaa = () => { // Sivun päivitys kaataa ohjelman??


        window.location.reload(false);
        navigate('/snippets')


    }*/
    let AllCommentsList = []
    comments.forEach(c => { if ((c.commentID) === snip._id) AllCommentsList.push(c.commentText); })     //Getting all comments into a list
    //console.log(AllCommentsList)
    //Mapping all comments identifying with IDs which post contains which comment
    return (
        <div className='newComment'>


            {jwt ? <>
                <h2>Add a new Comment</h2>
                <form onSubmit={submit} onChange={onChange}>
                    <textarea className='inputs' ref={commentInputValue} placeholder="Write Comment" />
                    <br></br>
                    <input type={'submit'} value="Add Comment" className='btn' ></input>
                </form>
            </> : <><h2 className='header'>Need to login to comment</h2></>}


            <div className='CommentList'>
                {AllCommentsList.length !== 0 &&
                    <>
                        <div className="CommentsList">
                            <ul>
                                {AllCommentsList.map(com =>
                                    <li className='listItem' key={com} >
                                        <p> {com} </p>
                                    </li>)}
                            </ul>


                        </div>
                    </>
                }
                {AllCommentsList.length === 0 &&
                    <>
                        <h3> No comments yet!</h3>
                    </>}
            </div>


            <nav>
                <Link to="/"> Go back to home </Link>
            </nav>
        </div >
    )
}

export default Comment
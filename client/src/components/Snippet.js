import React from 'react'
import { Link } from 'react-router-dom'


const Snippet = ({ snip }) => {
    //Listing all snippets for also unauthorized users and making link to see specific snippet comments and all other data
    return (
        <div className='OneSnippet'>

            <pre>Snippet title: <strong>{snip.title}</strong>
                <Link to={`/snippet/${snip._id}`}>
                    <pre>Click here for more information on this snippet</pre>
                </Link>
            </pre>

        </div>
    )
}

export default Snippet
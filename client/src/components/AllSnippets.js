import React from 'react'
import Snippet from './Snippet'

function AllSnippets({ snippets }) {

    //Maps all snippets
    return (
        <>

            {snippets && snippets.map((snip) => (
                <Snippet key={snip._id} snip={snip}></Snippet>
            ))}

        </>
    )
}

export default AllSnippets
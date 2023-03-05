import React from 'react'

import { useParams } from 'react-router';

import Comment from './Comment';

const SnippetSearch = ({ jwt, snippets }) => {
    const { id } = useParams()
    const snip = snippets.find(p => (p._id).toString() === id); //Finding specific id from url params that matches database id
    //Listing all snippet data and the forwarding to comment check comments
    return (
        <div>
            <h2><strong>SNIPPET DESCRIPTION</strong></h2>
            <p className='SnippetDescription' key={snip._id}>
                Title: <strong>{snip.title}</strong><br />
                Username: {snip.username} <br />
                Code: {snip.code}<br />
                Text: {snip.text}<br />
                ID:({snip._id})
            </p>
            <h2>Comments</h2>
            <Comment snip={snip} jwt={jwt}></Comment>

        </div>
    )
}

export default SnippetSearch
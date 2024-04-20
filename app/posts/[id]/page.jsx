import React from 'react';

async function getPost(id) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    return response.json()
}

export async function generateMetadata({params}) {
    const post = await getPost(params.id)
    return {
        title: post.title
    }
}

const Post = async ({params}) => {
    const post = await getPost(params.id)
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
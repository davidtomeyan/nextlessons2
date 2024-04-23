import React from 'react';

const getData = async (id) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id)
    return response.json()
}
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id

    // fetch data
    const product = await getData(id)

    return {
        title: product.title,
    }
}

const Page = async ({params}) => {
    const post = await getData(params.id)
    return (
        <div style={{width:"80%"}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Page;
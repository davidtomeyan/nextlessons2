import {Box, Typography} from "@mui/material";
import Link from "next/link";

export const metadata = {
    title: "Posts",
    description: "Generated by create next app",
};

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 20
        }
    })
    return response.json()
}

export default async function Posts() {
    const posts = await getData()
    return (
        <>
            <div>{posts?.map((i) => {
                return <div key={i.id} >
                    <Link href={`/posts/${i.id}`}>{i.title}</Link>
                </div>

            })}</div>
        </>
    )
}
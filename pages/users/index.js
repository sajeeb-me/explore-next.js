import React from 'react'

function index({ users }) {
    return (
        <div>
            <h1>This is users: {users.length}</h1>
        </div>
    )
}

export default index;


export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}
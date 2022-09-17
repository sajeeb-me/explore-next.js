import React from 'react'
import UserComponent from '../../components/UserComponent';

function index({ users }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>This is users: {users.length}</h1>
            {
                users.map(user => (
                    <UserComponent key={user.id} user={user} />
                ))
            }
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
import Link from 'next/link';
import React from 'react';

const User = ({ user }) => {
    return (
        <section>
            <article
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}
            >
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
                <Link href={`/users`}>
                    <button>Back</button>
                </Link>
            </article>
        </section>
    );
};

export default User;

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();

    // Get the paths we want to pre-render based on posts
    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()

    // Pass user data to the page via props
    return { props: { user } }
}
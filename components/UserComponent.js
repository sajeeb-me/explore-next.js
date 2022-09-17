import React from 'react';
import Link from 'next/link';


const UserComponent = ({ user }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <h3>Name: {user.name}</h3>
            <Link href={`/users/${user.id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default UserComponent;
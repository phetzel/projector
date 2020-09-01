import React from 'react';

const UserShow = ({ user }) => (
    <div className="user">
        <h1>{user.email}</h1>
        <div className="user-shows">
            <h3>Upcoming Shows</h3>
            <ul>
                {user.shows.forEach(show => {
                    <li>Date: {show.date}</li>
                })}
            </ul>
        </div>
    </div>
);

export default UserShow;


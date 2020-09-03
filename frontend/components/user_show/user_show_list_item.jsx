import React from 'react';
import { Link } from 'react-router-dom';

import { revDate, displayTimeDay } from '../../util/data_util';

const UserShowListItem = ({show}) => (
    // <Link to={`/shows/${show.id}`}>
        <li className="user-show-li">
            <h6>{show.movie.title}</h6>
            <div className="user-show-li-details">
                <p>{show.address}</p>

                <div className="user-show-li-when">
                    <p>{displayTimeDay(show.time)}</p>
                    <p>{revDate(show.date)}</p>
                </div>
            </div>
        </li>
    // </Link >
);

export default UserShowListItem;
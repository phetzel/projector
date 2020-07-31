import React from 'react';
import { Link } from 'react-router-dom';

import ShowMap from '../search/show_map';
import ShowDetail from './show_detail';

const ShowShow = ({ show, showId, fetchShow }) => {
    const shows = {
        [showId]: show
    };

    return(
        <div>
            <ShowMap 
                shows={shows}
                showId={showId}
                single={true}
                fetchShow={fetchShow}
            />
            <ShowDetail show={show} />
        </div>
    )
}

export default ShowShow;
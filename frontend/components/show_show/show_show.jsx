import React from 'react';
import { Link } from 'react-router-dom';

import ShowMap from '../search/show_map';
import ShowDetail from './show_detail';

const ShowShow = ({ show, showId, fetchShow, attendShow, unattendShow, userId }) => {
    const shows = {
        [showId]: show
    };

    return(
        <div className="show-show">
            <ShowMap 
                shows={shows}
                showId={showId}
                single={true}
                fetchShow={fetchShow}
            />
            <ShowDetail 
                show={show}
                attendShow={attendShow}
                unattendShow={unattendShow}
                userId={userId} />
        </div>
    )
}

export default ShowShow;
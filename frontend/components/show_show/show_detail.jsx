import React from 'react';
import { Link } from 'react-router-dom';

import { displayTimeDay, displayTimeLength, revDate } from '../../util/data_util';

class ShowDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { show } = this.props;
        const movie = show ? show.movie : null;


        const showList = show && movie ? (
            <div className="show-detail">
                <h1>{movie.title}</h1>

                <h6>Address</h6>
                <p>{show.address}</p>

                <div className="show-detail-when">
                    <div className="show-detail-date">
                        <h6>Date</h6>
                        <p>{revDate(show.date)}</p>
                    </div>
                    <div className="show-detail-time">
                        <h6>Start Time</h6>
                        <p>{displayTimeDay(show.time)}</p>
                    </div>
                </div>

                <h6>Runtime</h6>
                <p>{displayTimeLength(movie.run_time)}</p>
                <h6>Movie Description:</h6>
                <p>{movie.desc}</p>
                <h6>Additional Venue Details:</h6>
                <p>{show.desc}</p>
            </div>
        ) : null;

        return (
            <div className="show-detail-container">
                {showList}
                <Link to="/">Back to Main Page</Link>
            </div>
        )
    }
}

export default ShowDetail;
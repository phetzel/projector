import React from 'react';
import { Link } from 'react-router-dom';

import { displayTimeDay, displayTimeLength, revDate } from '../../util/data_util';

class ShowDetail extends React.Component {
    constructor(props) {
        super(props);

        this.handleAttend = this.handleAttend.bind(this);
        this.handleUnattend = this.handleUnattend.bind(this);
    }

    handleAttend() {
        const { attendShow, show } = this.props;
        attendShow(show.id);
    }

    handleUnattend() {
        const { unattendShow, show, userId } = this.props;
        let followId;

        show.attending.forEach(att => {
            if (att.user_id === userId) {
                followId = att.id;
            }
        });

        unattendShow(followId);
    }

    handleAttendRender() {
        const { show, userId } = this.props;
        let alreadyAttending = false;

        if (show) {
            if (show.attending.some(att => att.user_id === userId)) {
                alreadyAttending = true;
            }
        }

        return alreadyAttending ? (
            <button onClick={this.handleUnattend} className="unattend"> Unattend</button >
        ) : (
            <button onClick={this.handleAttend} className="attend"> Attend</button >
        )
    }

    render() {
        const { show, userId } = this.props;
        const movie = show ? show.movie : null;

        const attendPanel = show.attending && userId ? (
            <div className="show-detail-attend">
                <p>Attending: { show.attending.length }</p>
                {this.handleAttendRender()}
            </div>
        ) : null;

        const showList = show && movie ? (
            <div className="show-detail">
                <h1>{movie.title}</h1>

                {attendPanel}

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

                <div className="show-detail-movie">
                    <div className="show-detail-runtime">
                        <h6>Runtime</h6>
                        <p>{displayTimeLength(movie.run_time)}</p>
                    </div>
                    <div className="show-detail-genre">
                        <h6>Genre</h6>
                        <p>{movie.genre}</p>
                    </div>
                </div>

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
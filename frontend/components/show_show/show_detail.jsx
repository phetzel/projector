import React from 'react';

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
                <h6>Runtime</h6>
                <p>{movie.run_time}</p>
                <h6>Date</h6>
                <p>{show.date}</p>
                <h6>Movie Description:</h6>
                <p>{movie.desc}</p>
                <h6>Additional Venue Details:</h6>
                <p>{show.desc}</p>
            </div>
        ) : null;

        return (
            <div className="show-detail-container">
                {showList}
            </div>
        )
    }
}

export default ShowDetail;
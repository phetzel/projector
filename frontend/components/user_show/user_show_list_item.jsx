import React from 'react';
import { withRouter } from 'react-router-dom';

import { revDate, displayTimeDay } from '../../util/data_util';

class UserShowListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { show } = this.props;
        this.props.history.replace({
            pathname: `/shows/${show.id}`,
            search: `lat=${show.lat}&lng=${show.lng}`,
            lat: `${show.lat}`,
            lng: `${show.lng}`
        });
    }

    render() {
        const { show } = this.props;
        return (
            <li className="user-show-li" onClick={this.handleClick}>
                <h5>{show.movie.title}</h5>
                <div className="user-show-li-details">
                    <p>{show.address}</p>

                    <div className="user-show-li-when">
                        <p>{displayTimeDay(show.time)}</p>
                        <p>{revDate(show.date)}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(UserShowListItem);

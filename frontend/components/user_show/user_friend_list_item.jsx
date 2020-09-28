import React from 'react';
import { withRouter } from 'react-router-dom';

class UserFriendListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { friend, fetchUser } = this.props;
        fetchUser(friend.id);
        this.props.history.push({
            pathname: `${friend.id}`
        });
    }

    futureShows() {
        const { friend } = this.props;
        const today = new Date();

        let count = 0;

        friend.shows.forEach(show => {
            const showDate = new Date(show.date);

            if (showDate > today) count++;
        })

        if (count != 0) {
            return `Attending ${count} future shows`;
        } else {
            return '';
        }
    }

    render() {
        const { friend } = this.props;
        const future = this.futureShows();

        return (
            <li className="user-show-li" onClick={this.handleClick}>
                    <h6>{friend.email}</h6>
                    <p id="friend-shows">{future}</p>
            </li>
        )
    }
}

export default withRouter(UserFriendListItem);
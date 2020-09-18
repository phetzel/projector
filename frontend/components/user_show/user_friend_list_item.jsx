import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserFriendListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { friend } = this.props;
        this.props.history.push({
            pathname: `${friend.id}`
        });
    }

    render() {
        const { friend } = this.props;

        return (
            // <Link to={`/user/${this.props.friend.id}`}>
            <li className="user-show-li" onClick={this.handleClick}>
                    <h6>{friend.email}</h6>
            </li>
            /* // </Link > */
            
        )
    }
}

export default withRouter(UserFriendListItem);
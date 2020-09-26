import React from 'react';
import { withRouter } from  'react-router-dom';

import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.handleMap = this.handleMap.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }

    componentDidMount() {
        const { fetchUser, id, updateUsersFilter } = this.props;
        
        updateUsersFilter('userEmail', '');
        fetchUser(id);
    }

    isFriend(user) {
        const { currentUser } = this.props;
        let already = false;

        if (currentUser.friends) {
            currentUser.friends.forEach(friend => {
                if (friend.id === user.id) {
                    already = true;
                }
            })
        }

        return already;
    }

    handleSearch(e) {
        const { updateUsersFilter } = this.props;
        this.setState({ input: e.currentTarget.value })
        updateUsersFilter('userEmail', e.currentTarget.value);
    }

    handleProfile() {
        const { currentUser } = this.props;
        this.props.history.push(`/user/${currentUser.id}`);
    }

    handleMap() {
        this.props.history.push('/');
    }

    chooseDisplay() {
        const { input } = this.state;
        const { users, befriend, unfriend } = this.props;
        
        if (input === '') {
            return (
                <div className="user-index-results-none">
                    <h4>Enter a query above.</h4>
                </div>
            )
        } else {
            return (
                <ul>
                    {
                        users.map((user, idx) => (
                            <UserIndexItem
                                key={idx}
                                user={user}
                                befriend={befriend}
                                unfriend={unfriend}
                                friended={this.isFriend(user)}
                            />
                        ))
                    }
                </ul>
            )
        }
    }

    render() {
        const { users, befriend, unfriend } = this.props;

        const display = this.chooseDisplay();

        return (
            <div className="user-index">

                <h1>User Search</h1>
                <input 
                    type="text"
                    onChange={(e) => this.handleSearch(e)}
                    placeholder="Search By Email"/>

                <div className="user-index-results">
                    {display}
                </div>

                <div className="user-index-nav">
                    <button onClick={this.handleProfile}>Back To Profile</button>
                    <button onClick={this.handleMap}>Back To Map</button>
                </div>
            </div>
        )
    }
}

export default withRouter(UserIndex);
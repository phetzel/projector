import React from 'react';

import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);

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
        updateUsersFilter('userEmail', e.currentTarget.value);
    }

    render() {
        const { users, befriend, unfriend } = this.props;

        return (
            <div className="user-index">

                <h1>Search</h1>
                <input 
                    type="text"
                    onChange={(e) => this.handleSearch(e)}
                    placeholder="Search By Email"/>

                <div className="user-index-results">
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
                </div>
            </div>
        )
    }
}

export default UserIndex;
import React from 'react';

import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { fetchUser, id } = this.props;
        
        this.handleAsync();
        fetchUser(id);
    }

    handleAsync(type) {
        const { fetchUsers } = this.props;
        return fetchUsers();
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

    render() {
        const { users, befriend, unfriend } = this.props;

        return (
            <div>
                <h1>Search</h1>
                <input type="text"/>
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
        )
    }
}

export default UserIndex;
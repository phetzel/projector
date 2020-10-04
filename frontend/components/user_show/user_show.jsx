import React from 'react';
import { Link } from 'react-router-dom';

import UserShowListItem from './user_show_list_item';
import UserFriendListItem from './user_friend_list_item';
import { openModal } from '../../actions/modal_actions';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            today: new Date()
        }

        this.props.fetchUser(this.props.userId);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { user, currentUser, fetchUser, openModal, userId } = this.props;
        const { today } = this.state;
        const own = currentUser === userId;

        let passed = [];
        let future = [];
        let friends = null;
        let email = null;
        let self = null;
        let image = own ? (
            <img
                className="user-info-own"
                src={window.avatar}
                alt="Avatar"
                onClick={openModal} />
        ) : (
            <img
                src={window.avatar}
                alt="Avatar" />
        );

        if (user) {

            email = user.email;

            if ('shows' in user) {
                user.shows.forEach(show => {
                    const showDate = new Date(show.date);
                    if (today > showDate) {
                        passed.push(show);
                    } else {
                        future.push(show);
                    }
                })
            }

            if (user.friends) {
                friends = (
                    <ul>
                        {
                            user.friends.map((friend, idx) => (
                                <UserFriendListItem
                                    key={idx}
                                    friend={friend} 
                                    fetchUser={fetchUser}/>
                            ))
                        }
                    </ul>
                )
            }

            if (user.id === currentUser) {
                self = (
                    <Link className="user-friends-add" to="/users/add">
                        <button>Add friends</button>
                    </Link>
                );
            }

            if (user.photoUrl) {
                own ? 
                    image = <img 
                        src={user.photoUrl} 
                        onClick={openModal} 
                        className="user-info-own"/> : 
                    image = <img src={user.photoUrl} />;
            }
        }

        const showings = (
            <div className="user-shows-lists">
                <div className="user-shows-past">
                    <h3>Passed Shows Attended</h3>
                    <ul>
                        {passed.map((show, idx) => (
                            <UserShowListItem
                                key={idx}
                                show={show}
                            />
                        ))}
                    </ul>
                </div>

                <div className="user-shows-future">
                    <h3>Future Shows Attending</h3>
                    <ul>
                        {future.map((show, idx) => (
                            <UserShowListItem
                                key={idx}
                                show={show} />
                        ))}
                    </ul>
                </div>
            </div>
        );


        return (
            <div className="user">
                <div className="user-info">
                    {image}
                    <h1>{email}</h1>
                </div>

                <div className="user-shows">
                    {showings}
                </div>

                <div className="user-friends">
                    <h3>Friends</h3>
                    {self}

                    {friends}
                </div>
            </div>
        )
    }
} 


export default UserShow;


import React from 'react';


import UserShowListItem from './user_show_list_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            today: new Date()
        }
    }

    componentDidMount() {
        this.props.fetchUser(1);
    }

    handleClick(show) {
            this.props.history.push({
                pathname: `shows/${show.id}`,
                search: `lat=${show.lat}&lng=${show.lng}`,
                lat: `${show.lat}`,
                lng: `${show.lng}`
            });
    }

    render() {
        const { user } = this.props;
        const { today } = this.state;
        console.log(today);
        let passed = [];
        let future = [];

        if (user.shows) {
            user.shows.forEach(show => {
                const showDate = new Date(show.date);
                if (today > showDate) {
                    passed.push(show);
                } else {
                    future.push(show);
                }
            })
        }

        
        const showings = user.shows ? (
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
                            <UserShowListItem key={idx} show={show} />
                        ))}
                    </ul>
                </div>
            </div>
        ) : (
            null
        );

        return (
            <div className="user">
                <div className="user-info">
                    <img src={window.avatar} alt="Avatar" />
                    <h1>{user.email}</h1>
                </div>

                <div className="user-shows">
                    {showings}
                </div>
            </div>
        )
    }
} 


export default UserShow;


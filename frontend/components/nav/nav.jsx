import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, openModal, logout } = this.props;

        const loggedOut = () => (
            <nav className="nav-logged-out">
                <button onClick={() => openModal('login')}>Login</button>
                <button id="signup" onClick={() => openModal('signup')}>Signup</button>
            </nav>
        );

        const loggedIn = () => (
            <nav className="nav-logged-in">
                <p>{currentUser.email}</p>
                <button
                    className="user-nav"
                    onClick={() => logout()}>
                    Logout
                </button>
            </nav>
        );

        return (
            <div className="nav">
                <div className="nav-logo"></div>
                <div className="nav-buttons">{currentUser ? loggedIn() : loggedOut()}</div>
            </div>
        )
    }
}

export default Nav;
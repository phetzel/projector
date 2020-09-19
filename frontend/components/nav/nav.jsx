import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link className="nav-user" to={`/user/${currentUser.id}`}>
                    {/* <p>{currentUser.email}</p> */}
                    <p>&#127968;</p>
                </Link>
                <button
                    className="user-nav"
                    onClick={() => logout()}>
                    Logout
                </button>
            </nav>
        );

        return (
            <div className="nav">
                <div className="nav-logo">
                    <Link className="logo" to="/">
                        <img src={window.logo} alt="Logo" />
                    </Link>
                </div>

                <div className="nav-buttons">{currentUser ? loggedIn() : loggedOut()}</div>
            </div>
        )
    }
}

export default Nav;
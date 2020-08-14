import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdminLogin = this.handleAdminLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(this.props.closeModal)
    }

    handleAdminLogin(e) {
        e.preventDefault();
        const user = Object.assign({}, {
            email: 'admin',
            password: 'admin1'
        });

        this.props.login(user)
            .then(this.props.closeModal)
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            <div className="login-form-container">
                <h1>Log In</h1>

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input type="text"
                            className="login-input"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>

                    <br/>

                    <label>Password:
                        <input type="password"
                            className="login-input"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>

                    <br/>

                    <input className="login-submit" type="submit" value="Log In" />

                    <button onClick={this.handleAdminLogin}>Demo Admin Login</button>

                    {this.renderErrors()}

                </form>

                <a onClick={this.props.signup}>Create an account?</a>

            </div>
        )
    }
}

export default LoginForm;
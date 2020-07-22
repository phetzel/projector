import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(this.props.closeModal);
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
        return (
            <div className="login-form-container">

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>

                    <label>Email:
                    <input type="text"
                            className="login-input"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>

                    <br/>

                    <label>Password:
                    <input type="text"
                            className="login-input"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>

                    <br/>

                    <input className="login-submit" type="submit" value="Sign Up" />

                    {this.renderErrors()}

                </form>

                <a onClick={this.props.login}>Already have an account?</a>

            </div>
        )
    }
}

export default SignupForm;
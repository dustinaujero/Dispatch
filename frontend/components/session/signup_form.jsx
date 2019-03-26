import React from 'react'
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.signup(this.state);
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value })
        }
    }

    render() {
        return (
            <div className="session-form">
                <h1>Create An Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="text" onChange={this.update('email')} value={this.state.email} />
                    <label>Username</label>
                    <input type="text" onChange={this.update('username')} value={this.state.username}/>
                    <label>Password</label>
                    <input type="password" onChange={this.update('password')} value={this.state.password} />
                    <input type="submit" value="Continue" />
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        )
    }
}

export default SignupForm;
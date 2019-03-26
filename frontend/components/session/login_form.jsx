import React from 'react'
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props){
        super(props)
        this.state =  {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state);
    }

    update(field) {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    render() {
        return (
            <div className="session-form">
                <h1>Welcome Back</h1>
                <h3>We're so excited to see you again</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                        <input type="text" onChange={this.update('email')} value={this.state.email}/>
                    <label>Password</label>
                    <input type="password" onChange={this.update('password')} value={this.state.password}/>
                    <input type="submit" value="Login" />
                </form>
                <a href="#">Forgot your password?</a>
                <h6>Need an account? <Link to="/signup">Register</Link></h6>
            </div>
        )
    }
}

export default LoginForm;
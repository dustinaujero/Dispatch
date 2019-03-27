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
        this.props.clearSessionErrors();
        this.props.login(this.state);
    }

    update(field) {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    componentWillUnmount(){
        this.props.clearSessionErrors();
    }

    render() {
        let emailError = "";
        let pwError = "";
        let inval = "";
        this.props.errors.forEach((error) => {
            switch (error.split(" ")[0]) {
                case "Password": {
                    pwError = " - This field is required";
                    break;
                }
                case "Email": {
                    emailError = " - This field is required";
                    break;
                }
                case "Invalid": {
                    inval = "Invalid email or password";
                    break;
                }
            }
        })
        return (
            <div className="session-form">
                <h1>Welcome Back</h1>
                <h3>We're so excited to see you again</h3>
                {inval}
                <form onSubmit={this.handleSubmit}>
                    <label className={emailError ? "bad-label" : ""}>Email <strong>{emailError}</strong></label>
                    <input className={emailError ? "bad-input" : ""} type="text" onChange={this.update('email')} value={this.state.email}/>
                    <label className={pwError ? "bad-label" : ""} >Password <strong>{pwError}</strong></label>
                    <input className={pwError ? "bad-input" : ""} type="password" onChange={this.update('password')} value={this.state.password}/>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <a href="#">Forgot your password?</a>
                <h6>Need an account? <Link className="session-link" to="/signup">Register</Link></h6>
            </div>
        )
    }
}

export default LoginForm;
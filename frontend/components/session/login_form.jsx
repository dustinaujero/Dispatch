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
    componentDidMount(){
        $(".session-form").addClass("fade-in").removeClass("fade-out");
        // $(".session-form").removeClass("fade-out");
  
    }
    componentWillUnmount(){
        // $(".session-form").removeClass("fade-in");
        $(".session-form").addClass("fade-out");
        this.props.clearSessionErrors();
    }

    render() {
        let emailError = "";
        let pwError = "";
        let inval = "";
        this.props.errors.forEach((error) => {
            switch (error.split(" ")[0]) {
                case "Password": {
                    pwError = " - " + error;
                    inval = ""
                    break;
                }
                case "Email": {
                    emailError = " - " + error;
                    inval = ""
                    break;
                }
                case "Invalid": {
                    inval = " - " + error;
                    break;
                }
            }
        })
        return (
            <div className="session-form">
                <div>Welcome Back!</div>
                <div>We're so excited to see you again!</div>
                {inval}
                <form onSubmit={this.handleSubmit}>
                    <label className={emailError ? "bad-label" : ""}>EMAIL <strong>{emailError}</strong></label>
                    <input className={emailError ? "bad-input" : ""} type="text" onChange={this.update('email')} value={this.state.email}/>
                    <label className={pwError ? "bad-label" : ""} >PASSWORD <strong>{pwError}</strong></label>
                    <input className={pwError ? "bad-input" : ""} type="password" onChange={this.update('password')} value={this.state.password}/>
                    <a href="#/login">Forgot your password?</a>
                    <input className="form-submit" type="submit" value="Login" />
                    <div className="form-last">
                        <div>Need an account?<Link className="session-link" to="/signup">Register</Link></div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;
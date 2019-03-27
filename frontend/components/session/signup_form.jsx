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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.clearSessionErrors();
        this.props.signup(this.state);
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value })
        }
    }
    componentDidMount() {
        // debugger
        $(".session-form").addClass("fade-in").removeClass("fade-out");
        // debugger
        // $(".session-form").removeClass("fade-out");

    }
    componentWillUnmount() {
        // debugger
        // $(".session-form").removeClass("fade-in");
        $(".session-form").addClass("fade-out");
        // debugger
        this.props.clearSessionErrors();
    }

    render() {
        let emailError = "";
        let pwError = "";
        let nameError = "";
        this.props.errors.forEach( (error) => {
            switch(error.split(" ")[0]){
                case "Username": {
                    nameError = " - " + error;
                    break;
                }
                case "Password": {
                    pwError = " - " + error;
                    break;
                }
                case "Email": {
                    emailError = " - " + error;
                    break;
                }
            }
        })
        return (
            <div className="session-div">
                <div className="session-form">
                    <div>Create An Account</div>
                    <form onSubmit={this.handleSubmit}>
                        <label className={emailError ? "bad-label" : ""}>EMAIL<strong>{emailError}</strong></label> 
                        <input className={emailError ? "bad-input" : ""} type="text" onChange={this.update('email')} value={this.state.email} />
                        <label className={nameError ? "bad-label" : ""}>USERNAME<strong>{nameError}</strong></label> 
                        <input className={nameError ? "bad-input" : ""} type="text" onChange={this.update('username')} value={this.state.username}/>
                        <label className={pwError ? "bad-label" : ""}>PASSWORD<strong>{pwError}</strong> </label> 
                        <input className={pwError ? "bad-input" : ""} type="password" onChange={this.update('password')} value={this.state.password} />
                        <input className="form-submit" type="submit" value="Continue" />
                        <Link className="session-link" to="/login">Already have an account?</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;
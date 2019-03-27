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
        this.props.clearSessionErrors();
        this.props.signup(this.state);
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value })
        }
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {
        let emailError = "";
        let pwError = "";
        let nameError = "";
        this.props.errors.forEach( (error) => {
            switch(error.split(" ")[0]){
                case "Username": {
                    nameError = " - This field is required";
                    break;
                }
                case "Password": {
                    pwError = " - This field is required";
                    break;
                }
                case "Email": {
                    emailError = " - This field is required";
                    break;
                }
            }
        })
        return (
            <div className="session-form">
                <h1>Create An Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className={emailError ? "bad-label" : ""}>Email{emailError}</label> 
                    <input className={emailError ? "bad-input" : ""} type="text" onChange={this.update('email')} value={this.state.email} />
                    <label className={nameError ? "bad-label" : ""}>Username{nameError}</label> 
                    <input className={nameError ? "bad-input" : ""} type="text" onChange={this.update('username')} value={this.state.username}/>
                    <label className={pwError ? "bad-label" : ""}>Password{pwError} </label> 
                    <input className={pwError ? "bad-input" : ""} type="password" onChange={this.update('password')} value={this.state.password} />
                    <input className="form-submit" type="submit" value="Continue" />
                </form>
                <Link className="session-link" to="/login">Already have an account?</Link>
            </div>
        )
    }
}

export default SignupForm;
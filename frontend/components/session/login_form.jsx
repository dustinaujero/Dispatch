import React from 'react'
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props){
        super(props)
        this.state =  {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.demo = this.demo.bind(this);
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
    demo() {
        this.setState({
            email: "demo@demo.com",
            password: "password"
        }, () => {
            this.props.clearSessionErrors();
            this.props.login(this.state);
        });
    }
    componentDidMount(){
        // debugger
        $(".session-form").removeClass("fade-out").addClass("fade-in");
        // debugger
        // $(".session-form").removeClass("fade-out");
  
    }
    componentWillUnmount(){
        // $(".session-form").removeClass("fade-in");
        // debugger
        $(".session-form").addClass("fade-out");
        // debugger
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
                    inval = error;
                    break;
                }
            }
        })
        return (
            <div className="session-div">
                <div className="session-form">
                    <div>Welcome Back!</div>
                    <div>We're so excited to see you again!</div>
                    {inval}

                    <form onSubmit={this.handleSubmit}>
                        <label className={emailError ? "bad-label" : ""}>EMAIL <strong>{emailError}</strong></label>
                        <input className={emailError ? "bad-input" : ""} type="text" onChange={this.update('email')} value={this.state.email}/>
                        <label className={pwError ? "bad-label" : ""} >PASSWORD <strong>{pwError}</strong></label>
                        <input className={pwError ? "bad-input" : ""} type="password" onChange={this.update('password')} value={this.state.password}/>
                        <input className="form-submit" type="submit" value="Login" />
                    </form>

                    <div className="form-last">
                        <div>
                            <p>Need an account?</p>
                            <Link className="session-link" to="/signup">Register</Link>
                            <p> or </p>
                            <button onClick={this.demo}>Login as Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;
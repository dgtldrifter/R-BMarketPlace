import React from 'react';
import axios from 'axios';
import SignupModal from './../modals/SignupModal';
import SignupError from './../modals/SignupError';

var loadjs = require('loadjs');

class signup extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            errorMessage: '',
            isOpenSuccess: false,
            isOpenError: false,
        };
    }

    toggleModal = () => {
        this.setState({
            isOpenSuccess: !this.state.isOpenSuccess
        });
    }

    toggleModalError = () => {
        this.setState({
            isOpenError: !this.state.isOpenError
        });
    }

    onChangeErrorHandling = (event) => {
        event.preventDefault();
        let name      = event.target.name;
        let val       = event.target.value;
        let err       = '';
        if(name === "firstname"){
            if(Number(val)) {
                err = <p className="pt-2">There can't be a number for first name. </p>;
            }
        } else if(name === "lastname") {
            if(Number(val)) {
                err = <p className="pt-2">There can't be a number for last name.</p>;
            }
        }

        this.setState({errorMessage: err});
        this.setState({[name]: val});
    }

    onLoginHandle = e => {
        e.preventDefault();
        this.login();
    }

    mySubmitHandlerSignUp = e => {
        e.preventDefault();
        this.register();
    }

    async login() {
        axios({
            method: 'POST',
            url: 'users/login',
            data: {
                email:    this.state.email,
                password: this.state.password
            }
        }).then((response) => {
            if(response.status === 200) {
                window.location.href = './AddProduct';
            } 
        }, error => {
            alert('The email / password combination does not match an account. ');
        });
    }

    async register() {
        axios({
            method: 'POST',
            url: 'users/add',
            data: {
                firstName: this.state.firstname,
                lastName:  this.state.lastname,
                email:     this.state.email,
                password:  this.state.password
            }
        }).then((response) => {
            console.log(response);
            if(response.status === 200) {
                this.toggleModal();
            }
        }, error => {
            this.toggleModalError();
        });
    }
    render() {
        return (
            <React.Fragment>
                <div style={background}>
                    <SignupModal show={this.state.isOpenSuccess} onClose={this.toggleModal}>
                        You successfully created an account. 
                    </SignupModal>
                    <SignupError show={this.state.isOpenError} onCloseError={this.toggleModalError}>
                        Your account was not created. The email address / user already exists in the system. 
                    </SignupError>
                    <h1 style={title}>R&amp;B Market Place</h1>
                    <div style={container} className="container mt-2">
                        {/* Nav Tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#SignUp">Create Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#Login">Login</a>
                            </li>
                        </ul>
                        {/* Tab Panes */}
                        <div className="tab-content">
                            <div id="SignUp" className="container tab-pane active">
                                <form method="post" className="form-horizontal mt-4" onSubmit={this.mySubmitHandlerSignUp}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">First Name</label>
                                            <input type="text" name="firstname" onChange={this.onChangeErrorHandling} id="first_name" className="form-control" placeholder="Enter a first name" autoComplete="off" required/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Last Name</label>
                                            <input type="text" name="lastname" onChange={this.onChangeErrorHandling} id="last_name" className="form-control" placeholder="Enter a last name" autoComplete="off" required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Email</label>
                                            <input type="email" name="email" id="signUpEmail" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter an email" autoComplete="off" required/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Password</label>
                                            <input type="password" name="password" id="signUpPassword" onChange={this.onChangeErrorHandling} minLength="5" className="form-control" placeholder="Enter a password" autoComplete="off" required/>
                                        </div>
                                    </div>
                                    {this.state.errorMessage}
                                    <button type="submit" style={loginButton} className="btn btn-block mt-3">Create Account</button>
                                </form>
                            </div>
                            <div id="Login" className="container tab-pane">
                                <form method="post" className="form-horizontal mt-4" onSubmit={this.onLoginHandle}>
                                    <div className="row mt-2">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Email</label>
                                            <input type="email" name="email" id="loginEmail" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter an email" required/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Password</label>
                                            <input type="password" name="password" id="loginPassword" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter a password" required/>
                                        </div>
                                    </div>
                                    <button type="submit" style={loginButton} className="btn btn-block mt-3">Login</button>
                                    <button type="button" style={forgotPassword} className="btn btn-block mt-3">Forgot your password?</button>
                                </form>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const loginButton = {
    backgroundColor: '#66ccff'
}

const forgotPassword = {
    backgroundColor: '#ffa64d'
}

const background = {
    background: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100vh'
}

const title = {
    paddingTop: '15px',
    fontFamily: 'Cabin',
    fontSize: '40px',
    textAlign: 'center'
}

const container = {
    width: '60%'
}

export default signup;

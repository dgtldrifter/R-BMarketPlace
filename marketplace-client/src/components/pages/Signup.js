import React from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

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
            token: '',
            show: false,
            showError: false,
            signUpError: ''
        };
    }

    handleModal() {
        this.setState({ show: !this.state.show });
    }

    handleModalError() {
        this.setState({ showError: !this.state.showError });
    }

    onChangeErrorHandling = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let val = event.target.value;
        let err = '';
        if (name === "firstname") {
            if (Number(val)) {
                err = <p className="pt-2">There can't be a number for first name. </p>;
            }
        } else if (name === "lastname") {
            if (Number(val)) {
                err = <p className="pt-2">There can't be a number for last name.</p>;
            }
        }

        this.setState({ errorMessage: err });
        this.setState({ [name]: val });
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
        let userToken;
        let fullName;

        axios({
            method: 'POST',
            url: 'users/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then((response) => {
            if (response.status === 200) {
                userToken = response.data.token;
                fullName = response.data.fullName;

                this.setState({ token: userToken });
                localStorage.setItem('token', userToken);
                localStorage.setItem('fullName', fullName);
                window.location.href = './';
            }
        }, error => {
            if (error.response.data === "unverified") {
                localStorage.setItem('verificationEmail', this.state.email);
                window.location.href = './VerifyEmail';
            }
            else {
                alert(error.response.data);
            }
        });
    }

    async register() {
        axios({
            method: 'POST',
            url: 'users/add',
            data: {
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.handleModal();
                window.location.href = "./signup";
            }
        }, error => {
            let errorMsg = error.response.data.split('\n').map((item, i) => {
                return <p key={i}>{item}</p>;
            })
            this.setState({ signUpError: errorMsg });
            this.handleModalError();
        });
    }
    render() {
        return (
            <React.Fragment>
                <div style={background}>
                    <Modal show={this.state.showError}>
                        <Modal.Header className="bg-danger">
                            Error
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.signUpError}
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-danger" onClick={() => { this.handleModalError() }}>
                                Close
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.show}>
                        <Modal.Header className="bg-success">
                            Success
                        </Modal.Header>
                        <Modal.Body>
                            You successfully created an account.
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-success" onClick={() => { this.handleModal() }}>
                                Close
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <h1 style={title}>R&amp;B Market Place</h1>
                    <div style={container} className="container mt-2">
                        {/* Nav Tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#Login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#SignUp">Create Account</a>
                            </li>
                        </ul>
                        {/* Tab Panes */}
                        <div className="tab-content">
                            <div id="Login" className="container tab-pane active">
                                <form method="post" className="form-horizontal mt-4" onSubmit={this.onLoginHandle}>
                                    <div className="row mt-2">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Email</label>
                                            <input type="email" name="email" id="loginEmail" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter an email" required />
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Password</label>
                                            <input type="password" name="password" id="loginPassword" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter a password" required />
                                        </div>
                                    </div>
                                    <button type="submit" style={loginButton} className="btn btn-block mt-3">Login</button>
                                    <button type="button" style={forgotPassword} onClick={() => { window.location.href = './ForgotPassword'; }} className="btn btn-block mt-3">Forgot your password?</button>
                                </form>
                            </div>
                            <div id="SignUp" className="container tab-pane">
                                <form method="post" className="form-horizontal mt-4" onSubmit={this.mySubmitHandlerSignUp}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">First Name</label>
                                            <input type="text" name="firstname" onChange={this.onChangeErrorHandling} id="first_name" className="form-control" placeholder="Enter a first name" autoComplete="off" required />
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Last Name</label>
                                            <input type="text" name="lastname" onChange={this.onChangeErrorHandling} id="last_name" className="form-control" placeholder="Enter a last name" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Email</label>
                                            <input type="email" name="email" id="signUpEmail" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter an email" autoComplete="off" required />
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Password</label>
                                            <input type="password" name="password" id="signUpPassword" onChange={this.onChangeErrorHandling} className="form-control" placeholder="Enter a password" autoComplete="off" required />
                                        </div>
                                    </div>
                                    {this.state.errorMessage}
                                    <button type="submit" style={loginButton} className="btn btn-block mt-3">Create Account</button>
                                </form>
                            </div>
                            <hr />
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

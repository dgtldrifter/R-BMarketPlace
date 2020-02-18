import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import google from './../../google.png';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            errorMessage: ''
        };
    }
    onChangeErrorHandling = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let val  = event.target.value;
        let err  = '';
        if(name === "firstname"){
            if(Number(val)) {
                err = <p class="pt-2">There can't be a number for first name. </p>;
            }
        } else if(name === "lastname") {
            if(Number(val)) {
                err = <p class="pt-2">There can't be a number for last name.</p>;
            }
        }

        this.setState({errorMessage: err});
        this.setState({[name]: val});
    }
    mySubmitHandlerSignUp = (event) => {

    }
    mySubmitHandlerLogin = (event) => {
        event.preventDefault();
        let email    = this.state.email;
        let password = this.state.password;
    }
    render() {
        return (
            <React.Fragment>
                <div style={background}>
                    <h1 style={title}>R&amp;B Market Place</h1>
                    <div style={container} class="container mt-2">
                        {/* Nav Tabs */}
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#SignUp">Create Account</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#Login">Login</a>
                            </li>
                        </ul>
                        {/* Tab Panes */}
                        <div class="tab-content">
                            <div id="SignUp" class="container tab-pane active">
                                <form class="form-horizontal mt-4" onSubmit={this.mySubmitHandlerSignUp}>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 mt-2">
                                            <label class="lead">First Name</label>
                                            <input type="text" name="firstname" onChange={this.onChangeErrorHandling} id="first_name" class="form-control" placeholder="Enter a first name" required/>
                                        </div>
                                        <div class="col-sm-12 col-md-6 mt-2">
                                            <label class="lead">Last Name</label>
                                            <input type="text" name="lastname" onChange={this.onChangeErrorHandling} id="last_name" class="form-control" placeholder="Enter a last name" required/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6 mt-2">
                                            <label class="lead">Email</label>
                                            <input type="email" id="email" class="form-control" placeholder="Enter an email" required/>
                                        </div>
                                        <div class="col-sm-12 col-md-6 mt-2">
                                            <label class="lead">Password</label>
                                            <input type="password" id="password" minlength="5" class="form-control" placeholder="Enter a password" required/>
                                        </div>
                                    </div>
                                    {this.state.errorMessage}
                                    <button type="submit" style={loginButton} class="btn btn-block mt-3">Create Account</button>
                                </form>
                            </div>
                            <div id="Login" class="container tab-pane">
                                <form class="form-horizontal mt-4" onSubmit={this.mySubmitHandlerLogin}>
                                    <div class="row mt-2">
                                        <div class="col-sm-12 col-md-6 mt-2">
                                            <label class="lead">Email</label>
                                            <input type="email" id="email" class="form-control" placeholder="Enter an email" required/>
                                        </div>
                                        <div class="col-sm-12 col-md-6 mt-2">
                                            <label class="lead">Password</label>
                                            <input type="password" id="password" class="form-control" placeholder="Enter a password" required/>
                                        </div>
                                    </div>
                                    <button type="submit" style={loginButton} class="btn btn-block mt-3">Login</button>
                                    <button type="button" style={forgotPassword} class="btn btn-block mt-3">Forgot your password?</button>
                                </form>
                            </div>
                            <hr/>
                            {/*
                            <a class="btnGoogle" href="">
                                dfbjf<i class="fab fa-google"></i>
                            </a>
                            <a style={googleButton} href=""><img style={googleImage} src={google}/></a>
                            */}
                        </div>
=======
export default function signup() {
    return (
        <React.Fragment>
            <div style={background}>
                <h1 style={title}>Welcome to R&amp;B Market Place</h1>
                <div style={container} class="container mt-2">
                    {/* Nav Tabs */}
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#SignUp">Create Account</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#Login">Login</a>
                        </li>
                    </ul>
                    {/* Tab Panes */}
                    <div class="tab-content">
                        <div id="SignUp" class="container tab-pane active">
                            <form class="form-horizontal mt-4" method="POST">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <label class="lead">First Name</label>
                                        <input type="text" id="first_name" class="form-control" placeholder="Enter a first name" required/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <label class="lead">Last Name</label>
                                        <input type="text" id="last_name" class="form-control" placeholder="Enter a last name" required/>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-12 col-sm-6">
                                        <label class="lead">Email</label>
                                        <input type="text" id="email" class="form-control" placeholder="Enter a email" required/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <label class="lead">Password</label>
                                        <input type="text" id="password" class="form-control" placeholder="Enter a password" required/>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="form-check">
                                        <input type="checkbox" class="ml-1 form-check-input" id="terms" /><span class="ml-4 text-primary">I agree to the terms of use. </span>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block bg-primary mt-3">Create Account</button>
                            </form>
                        </div>
                        <div id="Login" class="container tab-pane">
                            <form class="form-horizontal mt-4" method="POST">
                                <div class="row mt-2">
                                    <div class="col-12 col-sm-6">
                                        <label class="lead">Email</label>
                                        <input type="text" id="email" class="form-control" placeholder="Enter a email" required/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <label class="lead">Password</label>
                                        <input type="text" id="password" class="form-control" placeholder="Enter a password" required/>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block bg-primary mt-3">Login</button>
                                <button type="button" class="btn btn-block bg-danger mt-3">Forgot your password?</button>
                            </form>
                        </div>
                        <hr/>
                        <a style={googleButton} href=""><img style={googleImage} src={google}/></a>
>>>>>>> origin/sprint1-frontCorrect
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
    background: `url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100vh'
}

const background = {
    background: `url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
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

const googleButton = {
    textDecoration: 'none'
}

const googleImage = {
    width: '40%'
}
<<<<<<< HEAD

export default signup;
=======
>>>>>>> origin/sprint1-frontCorrect

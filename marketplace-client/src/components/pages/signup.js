import React from 'react';
import google from './../../google.png';
import { Link } from 'react-router-dom';

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
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const background = {
    background: `url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
}

const title = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '30px',
    textAlign: 'center'
}

const container = {
    width: '55%'
}

const googleButton = {
    textDecoration: 'none'
}

const googleImage = {
    width: '40%'
}
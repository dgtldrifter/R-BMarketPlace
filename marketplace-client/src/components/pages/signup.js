import React from 'react';

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
    render() {
        return (
            <React.Fragment>
                <div style={background}>
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
                                            <input type="text" name="firstname" onChange={this.onChangeErrorHandling} id="first_name" className="form-control" placeholder="Enter a first name" required/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Last Name</label>
                                            <input type="text" name="lastname" onChange={this.onChangeErrorHandling} id="last_name" className="form-control" placeholder="Enter a last name" required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Email</label>
                                            <input type="email" id="signUpEmail" className="form-control" placeholder="Enter an email" required/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Password</label>
                                            <input type="password" id="signUpPassword" minLength="5" className="form-control" placeholder="Enter a password" required/>
                                        </div>
                                    </div>
                                    {this.state.errorMessage}
                                    <button type="submit" style={loginButton} className="btn btn-block mt-3">Create Account</button>
                                </form>
                            </div>
                            <div id="Login" className="container tab-pane">
                                <form method="post" className="form-horizontal mt-4">
                                    <div className="row mt-2">
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Email</label>
                                            <input type="email" id="loginEmail" className="form-control" placeholder="Enter an email" required/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mt-2">
                                            <label className="lead">Password</label>
                                            <input type="password" id="loginPassword" className="form-control" placeholder="Enter a password" required/>
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

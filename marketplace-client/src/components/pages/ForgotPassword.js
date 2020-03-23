import React from 'react';
import axios from 'axios';
var loadjs = require('loadjs');
class ForgotPassword extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userToken: '',
            newPassword: '',
            confirmPassword: '',
            postEmailInput: false
        }
    }

    onChangeHandler = e => {
        e.preventDefault();
        let name = e.target.name;
        let val = e.target.value;
        let err = '';

        this.setState({ errorMessage: err });
        this.setState({ [name]: val });
    }

    submitHandler = e => {
        e.preventDefault();
        this.getToken();
    }

    resetHandler = e => {
        e.preventDefault();
        this.resetPassword();
    }

    resetPassword() {
        if (this.state.userToken !== undefined || this.state.userEmail !== undefined
            || this.state.newPassword !== undefined || this.state.confirmPassword !== undefined) {
            if (this.state.newPassword !== this.state.confirmPassword) {
                window.alert("Error: The passwords do not match.");
            }
            else {
                axios({
                    method: 'POST',
                    url: 'users/resetpassword',
                    data: {
                        email: this.state.userEmail,
                        emailToken: this.state.userToken,
                        newPassword: this.state.newPassword
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        alert(response.data);
                        window.location.href = "./";
                    }
                }, error => {
                    alert(error.response.data);
                });
            }
        }
        else {
            window.alert("Error: Please fill out all of the input boxes.");
            window.location.href = '/';
        }
    }
    getToken() {
        if (this.state.userEmail !== undefined) {
            axios({
                method: 'POST',
                url: 'users/reemail',
                data: {
                    email: this.state.userEmail
                }
            }).then((response) => {
                if (response.status === 200) {
                    alert(response.data);
                    this.setState({ postEmailInput: true })
                }
            }, error => {
                alert(error.response.data);
            });
        }
        else {
            window.alert("Error: Please fill out the email address.");
            window.location.href = '/';
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>Forgot your password?</h1>
                <div className="wrapper">
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.submitHandler}>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="col-12 col-sm-12">
                                <label><b>Email address</b></label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="userEmail" required autoComplete="off" />
                            </div>
                        </div>
                        <button type="submit" style={resendButton} className="btn btn-block mt-3">Get token</button>
                    </form>
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.resetHandler}>
                        {
                            this.state.postEmailInput ? //making these visible after the token is successfully sent
                                <div>
                                    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className="col-12 col-sm-12">
                                            <label><b>Password Reset Token</b></label>
                                            <input type="text" onChange={this.onChangeHandler} className="form-control" name="userToken" required autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className="col-12 col-sm-12">
                                            <label><b>New Password</b></label>
                                            <input type="password" onChange={this.onChangeHandler} className="form-control" name="newPassword" required autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className="col-12 col-sm-12">
                                            <label><b>Confirm Password</b></label>
                                            <input type="password" onChange={this.onChangeHandler} className="form-control" name="confirmPassword" required autoComplete="off" />
                                        </div>
                                    </div>
                                    <button type="submit" style={verifyButton} className="btn btn-block mt-3">Confirm Reset</button>
                                </div>
                                : null
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;

const verifyButton = {
    backgroundColor: '#31ce51'
}
const resendButton = {
    backgroundColor: '#1a69b8'
}

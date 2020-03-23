import React from 'react';
import axios from 'axios';
var loadjs = require('loadjs');
var email = "";
class VerifyEmail extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('verificationEmail') === undefined || localStorage.getItem('verificationEmail') === "") {
            window.location.href = '/';
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            emailToken: ''
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
        this.submitToken();
    }

    submitToken() {
        if (this.state.emailToken !== undefined || this.state.emailToken !== "") {
            axios({
                method: 'POST',
                url: 'users/verify',
                data: {
                    email: localStorage.getItem('verificationEmail'),
                    emailToken: this.state.emailToken
                }
            }).then((response) => {
                if (response.status === 200) {
                    alert("Email address verified successfully!");
                    window.location.href = "./";
                }
            }, error => {
                alert(error.response.data);
            });
        }
        else {
            window.alert("Error: Couldn't get the user's email.");
            window.location.href = '/';
        }
    }
    resendToken() {
        if (localStorage.getItem('verificationEmail') != undefined) {
            axios({
                method: 'POST',
                url: 'users/reemail',
                data: {
                    email: localStorage.getItem('verificationEmail')
                }
            }).then((response) => {
                if (response.status === 200) {
                    alert(response.data);
                }
            }, error => {
                alert(error.response.data);
            });
        }
        else {
            window.alert("Error: Couldn't get the user's email.");
            window.location.href = '/';
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>Verify email address</h1>
                <div className="wrapper">
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.submitHandler}>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="col-12 col-sm-12">
                                <label><b>Token</b></label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="emailToken" required autoComplete="off" />
                            </div>
                        </div>
                        <button type="submit" style={verifyButton} className="btn btn-block mt-3">Verify</button>
                        <button type="button" style={resendButton} onClick={this.resendToken} className="btn btn-block mt-3">Resend Token?</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default VerifyEmail;

const verifyButton = {
    backgroundColor: '#31ce51'
}
const resendButton = {
    backgroundColor: '#1a69b8'
}

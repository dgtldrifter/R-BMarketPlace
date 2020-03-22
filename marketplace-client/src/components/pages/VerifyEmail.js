import React from 'react';
import axios from 'axios';
var loadjs = require('loadjs');
var email = "";
class VerifyEmail extends React.Component {
    componentDidMount() {
        loadjs('main.js');
        if (localStorage.getItem('token') !== null) {
            axios({
                method: 'POST',
                url: 'users/authToken',
                headers: {
                    "Content-Type": "application/json",
                    'token': localStorage.getItem('token')
                }
            }).then((response) => {
                email = response.data.email;
            }).catch((error) => {
                console.log(error);
            });
        } else {
            window.location.href = "./";
        }
    }

    constructor(props) {
        super(props);
        this.state = {
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
        window.alert("here")
    }
    resendToken() {
        window.alert("here2")
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

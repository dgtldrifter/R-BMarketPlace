import React from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

var loadjs = require('loadjs');
class VerifyEmail extends React.Component {
    componentDidMount() {
        loadjs('main.js');
        if (localStorage.getItem('verificationEmail') === undefined || localStorage.getItem('verificationEmail') === "") {
            window.location.href = '/';
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            successMessage: '',
            errorMessage: '',
            userEmail: '',
            emailToken: '',
            successShow: false,
            errorShow: false,
            resendError: false,
            errorToken: false,
            resendSuccess: false,
            resendError2: false
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

    handleSuccessModal() {
        this.setState({successShow: !this.state.successShow});
    }

    handleErrorModal() {
        this.setState({errorShow: !this.state.errorShow});
    }

    handleResendError() {
        this.setState({resendError: !this.state.resendError});
    }

    handleErrorToken() {
        this.setState({errorToken: !this.state.errorToken});
    }

    handleResendSuccess() {
        this.setState({resendSuccess: !this.state.resendSuccess});
    }

    handleResendError2() {
        this.setState({resendError2: !this.state.resendError2});
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
                    this.setState({successMessage: response.data});
                    this.handleSuccessModal();
                    window.location.href = "./";
                }
            }, error => {
                this.setState({errorMessage: error.response.data});
                this.handleErrorToken();
            });
        } else {
            this.handleErrorModal();
            window.location.href = '/';
        }
    }
    resendToken() {
        if (localStorage.getItem('verificationEmail') !== undefined) {
            axios({
                method: 'POST',
                url: 'users/reemail',
                data: {
                    email: localStorage.getItem('verificationEmail')
                }
            }).then((response) => {
                if (response.status === 200) {
                    this.setState({successMessage: response.data});
                    this.handleResendSuccess();
                }
            }, error => {
                this.setState({errorMessage: error.response.data});
                this.handleResendError2();
            });
        } else {
            this.handleResendError();
            window.location.href = '/';
        }
    }

    render() {
        return (
            <div className="container pb-5 pt-5">
                <Modal show={this.state.resendSuccess}>
                    <Modal.Header className="bg-success">
                        Success
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.successMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={()=>{this.handleResendSuccess()}}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.resendError2}>
                    <Modal.Header className="bg-danger">
                        Error
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.errorMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={()=>{this.handleResendError2()}}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.successShow}>
                    <Modal.Header className="bg-success">
                        Success
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.successMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={()=>{this.handleSuccessModal()}}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.errorShow}>
                    <Modal.Header className="bg-danger">
                        Error
                    </Modal.Header>
                    <Modal.Body>
                        Couldn't get the user's email.
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={()=>{this.handleErrorModal()}}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.resendError}>
                    <Modal.Header className="bg-danger">
                        Error
                    </Modal.Header>
                    <Modal.Body>
                        Couldn't get the user's email.
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={()=>{this.handleResendError()}}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.errorToken}>
                    <Modal.Header className="bg-danger">
                        Error
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.errorMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={()=>{this.handleErrorToken()}}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <h1 className='text-center'>Verify Email Address</h1>
                <div className="wrapper">
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.submitHandler}>
                        <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="col-12 col-sm-12">
                                <label><b>Token</b></label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="emailToken" required autoComplete="off" />
                            </div>
                        </div>
                        <button type="submit" style={verifyButton} className="btn btn-block mt-3">Verify</button>
                        <button type="button" style={resendButton} onClick={()=>{this.resendToken()}} className="btn btn-block mt-3">Resend Token?</button>
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

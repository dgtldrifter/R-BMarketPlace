import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SignupModal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={{backdropStyle}}>
                <div style={{modalStyle}}>
                    {this.props.children}
                    <div className="btn btn-danger">
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Close</Link>
                    </div>
                </div>
            </div>
        );
    }
}

SignupModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default SignupModal;
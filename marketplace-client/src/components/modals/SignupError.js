import React from 'react';
import PropTypes from 'prop-types';

class SignupError extends React.Component {
    render() {
        // Render nothing if the "show" prop is false.
        if(!this.props.show) {
            return null;
        }

        const modal = {
            width: '500px',
            background: 'white',
            border: '1px solid #ccc',
            transition: '1.1s ease-out',
            boxShadow: '-2rem 2rem 2rem rgba(black, 0.2)',
            filter: 'blur(0)',
            transform: 'scale(1)',  
            opacity: '1',
            visibility: 'visible',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: 50,
            textAlign: 'center'
        };

        const content = {
            padding: '1rem'
        };

        const actions = {
            borderTop: '1px solid #ccc',
            background: '#eee',
            padding: '0.5rem 1rem',
            textAlign: 'right'
        };

        return (
            <div style={{modal}}>
                <div style={{content}}>
                    {this.props.children}
                    <div style={{actions}}>
                        <button className="btn btn-danger" onClick={this.props.onCloseError}>Close Message</button>
                    </div>
                </div>
            </div>
        );
    }
}

SignupError.propTypes = {
    onCloseError: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default SignupError;
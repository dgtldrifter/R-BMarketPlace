import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                    <ul id="nav-link">
                        <li>
                            <Link style={linkStyle} className="text-black" to='./'>Home</Link>
                        </li>
                        <li>
                            <Link style={linkStyle} className="text-black" to="./signup">Access Account</Link>
                        </li>
                    </ul>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                </nav>
            </div>
        )
    }
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    letterSpacing: '3px',
    fontWeight: 'bold',
    fontFamily: 'cabin',
    fontSize: '14px'
}
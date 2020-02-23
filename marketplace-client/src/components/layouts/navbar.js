import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav-link">
                        <li>
                            <Link style={linkStyle} className="text-black" to='./'>Home</Link>
                        </li>
                        <li>
                            <Link style={linkStyle} className="text-black" to="./signup">Access Account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
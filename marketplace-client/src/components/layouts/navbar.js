import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class navbar extends React.Component {
    render() {
        return (
           <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
               <Link class="text-white" to='./'>Home</Link>
           </nav>
        )
    }
}
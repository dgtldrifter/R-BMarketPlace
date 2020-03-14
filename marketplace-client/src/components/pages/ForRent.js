import React from 'react';

var loadjs = require('loadjs');

class ForRent extends React.Component {
    componentDidMount() {
        loadjs('main.js');

        /*
        fetch('/getForRentApts')
        .then(results => {

        }).catch({

        });
        */
    }

    render() {
        return (
            <div>
                <h1>For Rent</h1>
            </div>
        );
    }
}

export default ForRent;
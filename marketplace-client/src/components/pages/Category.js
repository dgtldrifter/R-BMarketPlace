import React from 'react';

var loadjs = require('loadjs');

class Category extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>For Rent</h1>
            </div>
        );
    }
}

export default Category;
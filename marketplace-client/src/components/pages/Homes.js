import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        loadjs('main.js');

        fetch('posts/getHomes')
        .then(results => {

        }).catch({

        });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Home;
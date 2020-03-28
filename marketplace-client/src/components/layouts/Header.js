import React, {Component} from 'react';
import {Parallax} from 'react-parallax';

const styling = {
    opacity: .8,
}

const homeImage3= "../houses-banner.jfif";

class header extends Component {
    render() {
        return (
            <div id="banner">
                <Parallax bgImage={homeImage3} style={styling} strength={450} onScroll={this.handleScroll}>
                    <div id="scrollHeader">
                    <h1 className="title">R&amp;B Market Place</h1>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default header;
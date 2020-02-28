import React, {Component} from 'react';
import {Parallax} from 'react-parallax';

const styling = {
    opacity: .8,
}

{/*
const homeImage = "https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const homeImage2 = "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
*/}

const homeImage3= "../houses-banner.jfif";

class header extends Component {
    render() {
        return (
            <div>
                <div id="banner">
                    <Parallax bgImage={homeImage3} style={styling} strength={450} onScroll={this.handleScroll}>
                      <div id="scrollHeader">
                        <h1 className="title">R&amp;B Market Place</h1>
                      </div>
                    </Parallax>
                </div>
            </div>
        )
    }
}

export default header;
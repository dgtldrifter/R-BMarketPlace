import React, {Component} from 'react';
import {Parallax} from 'react-parallax';

const homeImage = "https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Parallax bgImage={homeImage} strength={450} onScroll={this.handleScroll}>
                    <div id="scrollHeader">
                        <h1 className="title">R&amp;B Market Place</h1>
                    </div>
                </Parallax>
                <div className="container">
                    <h2 className="text-center">Real Estate</h2>
                    <div className="row mt-2">
                        <div className="col-sm-4 col-12">
                            <div className="polaroid">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="House" width="100%"/>
                                <div style={imageContainer}>
                                    <p>Portland, Oregon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="polaroid">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="House" width="100%" />
                                <div style={imageContainer}>
                                    <p>Seattle, WA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="polaroid">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="House" width="100%" />
                                <div style={imageContainer}>
                                    <p>Kansas City, MO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center">Real Estate</h2>
                    <div className="row mt-2">
                        <div className="col-sm-4 col-12">
                            <div className="polaroid">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="House" width="100%"/>
                                <div style={imageContainer}>
                                    <p>Portland, Oregon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="polaroid">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="House" width="100%" />
                                <div style={imageContainer}>
                                    <p>Seattle, WA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="polaroid">
                                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="House" width="100%" />
                                <div style={imageContainer}>
                                    <p>Kansas City, MO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const imageContainer = {
    padding: '10px'
}

export default home;
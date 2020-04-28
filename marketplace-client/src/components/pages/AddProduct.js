import React from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';

var loadjs = require('loadjs');
var email = "";
var previousMarker = null;
const renderMarkers = (map, maps, latitude, longitude) => {
    if (previousMarker != null)
        previousMarker.setMap(null);
    let marker = new maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        title: ''
    });
    previousMarker = marker;
    return marker;
}

class AddProduct extends React.Component {
    componentDidMount() {
        loadjs('main.js');
        if (localStorage.getItem('token') !== null) {
            axios({
                method: 'POST',
                url: 'users/authToken',
                headers: {
                    "Content-Type": "application/json",
                    'token': localStorage.getItem('token')
                }
            }).then((response) => {
                email = response.data.email;
            }).catch((error) => {
                console.log(error);
            });
        } else {
            window.location.href = "./";
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            categoryid: '',
            price: '',
            latitude: 39.0997265,
            longitude: -94.5785667,
            address: '',
            saletype: '',
            errorMessage: '',
            image: null,
            show: false,
            showError: false,
            imageModal: false,
            googleMap1: null,
            googleMap2: null
        }
    }

    handleModal() {
        this.setState({ show: !this.state.show });
    }

    handleModalError() {
        this.setState({ showError: !this.state.showError });
    }

    handleImageModal() {
        this.setState({ imageModal: !this.state.imageModal });
    }

    buildSaleTypeOptions() {
        var arr = [];

        const saleTypes = ['Community', 'Services', 'For Sale', 'For Rent'];

        for (let i = 0; i <= saleTypes.length - 1; i++) {
            arr.push(<option key={i} value={saleTypes[i]}>{saleTypes[i]}</option>);
        }

        return arr;
    }

    buildCategoryTypeOptions() {
        var arr = [];

        const categories = ['Artists', 'Apartments', 'Homes',
            'Office', 'Cleaning Service', 'Furniture', 'Cooking', 'Transportation'];

        for (let i = 0; i <= categories.length - 1; i++) {
            arr.push(<option key={i} value={categories[i]}>{categories[i]}</option>)
        }

        return arr;
    }

    onChangeHandlerImage = e => {
        e.preventDefault();
        let image = e.target.files[0];
        this.setState({ image: image });
    }

    onChangeHandler = e => {
        e.preventDefault();
        let name = e.target.name;
        let val = e.target.value;
        let err = '';

        if (name === "price") {
            if (!Number(val)) {
                err = <p className="pt-2">Price has to be a number.</p>;
            }
        }

        this.setState({ errorMessage: err });
        this.setState({ [name]: val });
    }

    submitHandler = e => {
        e.preventDefault();
        this.addProduct();
    }

    addProduct() {
        //getting imgur key
        axios({
            method: 'POST',
            url: 'posts/getAPIKey',
        }).then((api_token) => {
            if (api_token.status === 200) {
                //Saving the image to imgur first
                let reader = new FileReader();
                reader.readAsDataURL(this.state.image);
                reader.onloadend = () => {
                    axios({
                        method: 'POST',
                        url: 'https://api.imgur.com/3/image',
                        crossDomain: true,
                        headers: {
                            Authorization: `Client-ID ${api_token.data}`
                        },
                        data: {
                            image: reader.result.split(",")[1]
                        }
                    }).then((response) => {
                        if (response.status === 200) {
                            //If image is added successfully, add the product.
                            axios({
                                method: 'POST',
                                url: 'posts/create',
                                data: {
                                    name: this.state.name,
                                    description: this.state.description,
                                    categoryid: this.state.categoryid,
                                    price: this.state.price,
                                    date: this.date.value,
                                    city: this.state.city,
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                    address: this.state.address,
                                    email: this.email.value,
                                    image: response.data.data.link,
                                    saletype: this.state.saletype
                                }
                            }).then((response) => {
                                if (response.status === 200) {
                                    this.handleModal();
                                    window.location.href = "./";
                                }
                            }, error => {
                                this.handleModalError();
                            });
                        }
                    }, error => {
                        this.handleImageModal();
                    });
                }
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then((latLng) => {
                this.setState({ latitude: latLng.lat })
                this.setState({ longitude: latLng.lng })
                this.setState({ address: address })
                renderMarkers(this.state.googleMap1, this.state.googleMap2, this.state.latitude, this.state.longitude)
            })
            .catch(error => console.error('Error', error));
    };
    handleChange = address => {
        this.setState({ address });
    };

    render() {
        return (
            <div className="add-product">
                <Modal show={this.state.show}>
                    <Modal.Header className="bg-success">
                        Success
                    </Modal.Header>
                    <Modal.Body>
                        You successfully added a product.
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success" onClick={() => { this.handleModal() }}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showError}>
                    <Modal.Header className="bg-danger">
                        Error
                    </Modal.Header>
                    <Modal.Body>
                        The product could not be added.
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={() => { this.handleModalError() }}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.imageModal}>
                    <Modal.Header className="bg-danger">
                        Error
                    </Modal.Header>
                    <Modal.Body>
                        Image could not be uploaded.
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={() => { this.handleImageModal() }}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                <div className="container">
                    <h1 className='text-center'>Add Product</h1>
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.submitHandler}>
                        <input type="hidden" value="something" />
                        <input type="hidden" className="form-control" id="currentDate" name="date" ref={(input) => { this.date = input }} />
                        <input type="hidden" className="form-control" name="email" value={email} ref={(input) => { this.email = input }} />
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Product Name</label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="name" placeholder="Enter a post name" required autoComplete="nope" />
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Description</label>
                                <textarea name="description" rows="3" onChange={this.onChangeHandler} className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Sale Type</label>
                                <select className="form-control" onChange={this.onChangeHandler} name="saletype" required>
                                    <option value="0">Choose a Sale Type</option>
                                    {this.buildSaleTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Product Category</label>
                                <select name="categoryid" onChange={this.onChangeHandler} className="form-control" required>
                                    <option value="0">Choose a Category</option>
                                    {this.buildCategoryTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Price</label>
                                <input type="number" onChange={this.onChangeHandler} className="form-control" name="price" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 mt-3">
                                <PlacesAutocomplete
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    onSelect={this.handleSelect}
                                >
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                        <div>
                                            <label>Address</label>
                                            <input required
                                                {...getInputProps({
                                                    placeholder: 'Type in your address...',
                                                    className: 'form-control mb-3 location-search-input',
                                                })}
                                                autoComplete="nope" />
                                            <div className="autocomplete-dropdown-container">
                                                {loading && <div>Loading...</div>}
                                                {suggestions.map(suggestion => {
                                                    const className = suggestion.active
                                                        ? 'suggestion-item--active'
                                                        : 'suggestion-item';
                                                    // inline style for demonstration purpose
                                                    const style = suggestion.active
                                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                    return (
                                                        <div
                                                            {...getSuggestionItemProps(suggestion, {
                                                                className,
                                                                style,
                                                            })}
                                                        >
                                                            <span>{suggestion.description}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </PlacesAutocomplete>
                            </div>
                        </div>
                        <React.Fragment>
                            <div style={{ height: '50vh', width: '100%' }}>
                                <GoogleMapReact
                                    center={{ lat: this.state.latitude, lng: this.state.longitude }}
                                    defaultZoom={10}
                                    yesIWantToUseGoogleMapApiInternals
                                    onGoogleApiLoaded={({ map, maps }) => this.setState({ googleMap1: map, googleMap2: maps })}
                                >
                                </GoogleMapReact>
                            </div>
                        </React.Fragment>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <label>Image</label>
                                <input type="file" onChange={(e) => this.onChangeHandlerImage(e)} className="form-control" name="image" required />
                            </div>
                        </div>
                        <button type="submit" style={loginButton} className="btn btn-block mt-3">Add Product</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default AddProduct;

const loginButton = {
    backgroundColor: '#ffa64d'
}

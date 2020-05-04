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

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: '',
            description: '',
            categoryid: '',
            price: '',
            latitude: '',
            longitude: '',
            address: '',
            saletype: '',
            errorMessage: '',
            image: null,
            show: false,
            showError: false,
            imageModal: false,
            imageAdded: false,
            googleMaps1: null,
            googleMaps2: null
        }
    }

    componentDidUpdate() {
        if (this.state.id !== this.props.id) {
            this.setState({
                id: this.props.id
            });
        }
    }

    componentDidMount() {
        loadjs("../../main.js");
        if (localStorage.getItem('token') !== null) {
            axios({
                method: 'POST',
                url: '../../users/authToken',
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

        axios({
            method: 'POST',
            url: '../../posts/getOne',
            headers: {
                "Content-Type": "application/json",
                ObjectID: this.props.id
            }
        }).then((response) => {
            if (response.status === 200) {
                this.setState({
                    name: response.data.name,
                    description: response.data.description,
                    saletype: response.data.saletype,
                    categoryid: response.data.categoryid,
                    price: response.data.price,
                    latitude: parseFloat(response.data.latitude),
                    longitude: parseFloat(response.data.longitude),
                    address: response.data.address,
                    image: response.data.image
                });
            }
        }).catch((err) => {
            console.log(err);
        });
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
            'Office / Commercial Space', 'Cleaning Service', 'Furniture', 'Cooking', 'Transportation'];

        for (let i = 0; i <= categories.length - 1; i++) {
            arr.push(<option key={i} value={categories[i]}>{categories[i]}</option>)
        }

        return arr;
    }

    handleModalError = e => {
        this.setState({ showError: !this.state.showError });
    }

    handleModal = e => {
        this.setState({ show: !this.state.show });
    }

    onChangeHandlerImage = e => {
        e.preventDefault();
        let image = e.target.files[0];
        this.setState({
            image: image,
            imageAdded: true
        });
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

    onSubmitHandler = e => {
        e.preventDefault();

        if (this.state.imageAdded) {
            this.editPostwithImage();
        }
        else {
            this.editPostwithoutImage();
        }
    }

    editPostwithoutImage() {
        axios({
            method: 'POST',
            url: '../../posts/updatePost',
            headers: {
                ObjectID: this.props.id
            },
            data: {
                name: this.state.name,
                description: this.state.description,
                categoryid: this.state.categoryid,
                price: this.state.price,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                address: this.state.address,
                saletype: this.state.saletype
            }
        }).then((response) => {
            if (response.status === 200) {
                this.handleModal();
                window.location.href = "../.././";
            }
        }).catch((error) => {
            this.handleModalError();
        });
    }

    editPostwithImage() {
        // getting imgur key
        axios({
            method: 'POST',
            url: '../../posts/getAPIKey',
        }).then((api_token) => {
            if (api_token.status === 200) {
                //saving the image to imgur first
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
                            //If image is updated successfully, update the product.
                            axios({
                                method: 'POST',
                                url: '../../posts/updatePost',
                                headers: {
                                    ObjectID: this.props.id
                                },
                                data: {
                                    name: this.state.name,
                                    description: this.state.description,
                                    categoryid: this.state.categoryid,
                                    price: this.state.price,
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                    address: this.state.address,
                                    saletype: this.state.saletype,
                                    image: response.data.data.link
                                }
                            }).then((response) => {
                                if (response.status === 200) {
                                    this.handleModal();
                                    window.location.href = "../.././";
                                }
                            }).catch((error) => {
                                this.handleModalError();
                            });
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }
            }
        });
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
            <div>
                <div className="container pb-3">
                    <Modal show={this.state.show}>
                        <Modal.Header className="bg-success">
                            Success
                        </Modal.Header>
                        <Modal.Body>
                            You successfully updated a product.
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
                            The product could not be updated.
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-danger" onClick={() => { this.handleModalError() }}>
                                Close
                            </button>
                        </Modal.Footer>
                    </Modal>
                    <h1 className='text-center pt-3'>Edit Post</h1>
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.onSubmitHandler}>
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Product Name</label>
                                <input type="text" className="form-control" onChange={this.onChangeHandler} name="name" value={this.state.name} required autoComplete="off" />
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Description</label>
                                <textarea name="description" rows="3" onChange={this.onChangeHandler} className="form-control" value={this.state.description} required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Sale Type</label>
                                <select className="form-control" name="saletype" onChange={this.onChangeHandler} value={this.state.saletype} required>
                                    <option value="0">Choose a Sale Type</option>
                                    {this.buildSaleTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Product Category</label>
                                <select name="categoryid" className="form-control" onChange={this.onChangeHandler} value={this.state.categoryid} required>
                                    <option value="0">Choose a Category</option>
                                    {this.buildCategoryTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Price</label>
                                <input type="number" onChange={this.onChangeHandler} className="form-control" name="price" value={this.state.price} autoComplete="off" required />
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
                                    onGoogleApiLoaded={({ map, maps }) => {
                                        renderMarkers(map, maps, this.state.latitude, this.state.longitude)
                                        this.setState({ googleMap1: map, googleMap2: maps })
                                    }

                                    }
                                >
                                </GoogleMapReact>
                            </div>
                        </React.Fragment>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <label>Image</label>
                                <input type="file" onChange={(e) => this.onChangeHandlerImage(e)} className="form-control" name="image" />
                            </div>
                        </div>
                        <button type="submit" style={loginButton} className="btn btn-block mt-3">Update Product</button>
                    </form>
                </div>
            </div>
        );
    }
}

const loginButton = {
    backgroundColor: '#ffa64d'
}

export default EditPost;

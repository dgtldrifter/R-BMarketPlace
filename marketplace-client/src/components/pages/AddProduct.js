import React from 'react';
import axios from 'axios';

var loadjs = require('loadjs');
var email = "";
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
            city: '',
            location: '',
            address: '',
            saletype: '',
            errorMessage: '',
            image: null
        }
    }


    buildStateOptions() {
        var arr = [];

        const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
            'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
            'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
            'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];

        for (let i = 0; i <= states.length - 1; i++) {
            arr.push(<option key={i} value={states[i]}>{states[i]}</option>);
        }

        return arr;
    }

    buildSaleTypeOptions() {
        var arr = [];

        const saleTypes = ['Community', 'Services', 'Discussion Forms', 'Housing', 'For Sale', 'For Rent'];

        for (let i = 0; i <= saleTypes.length - 1; i++) {
            arr.push(<option key={i} value={saleTypes[i]}>{saleTypes[i]}</option>);
        }

        return arr;
    }

    buildCategoryTypeOptions() {
        var arr = [];

        const categories = ['Apartments', 'Homes',
            'Offices / Commercal Space', 'Furniture', 'Cooking', 'Transportation'];

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
                                    location: this.state.location,
                                    address: this.state.address,
                                    email: this.email.value,
                                    image: response.data.data.link,
                                    saletype: this.state.saletype
                                }
                            }).then((response) => {
                                if (response.status === 200) {
                                    alert("You successfully added a product. ");
                                    window.location.href = "./";
                                }
                            }, error => {
                                console.log(error);
                                alert('The product could not be added.');
                            });
                        }
                    }, error => {
                        console.log(error);
                        alert('Error:  The image could not be submitted!');
                    });
                }
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
        <div className="add-product">
            <div className="container">
                <h1 className='text-center'>Add Product</h1>
                <div className="wrapper">
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.submitHandler}>
                        <input type="hidden" className="form-control" id="currentDate" name="date" ref={(input) => { this.date = input }} />
                        <input type="hidden" className="form-control" name="email" value={email} ref={(input) => { this.email = input }} />
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Product Name</label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="name" required autoComplete="off" />
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Description</label>
                                <textarea name="description" rows="3" onChange={this.onChangeHandler} className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Sale Type</label>
                                <select className="form-control" onChange={this.onChangeHandler} name="saletype" required>
                                    <option value="0">Choose a Sale Type</option>
                                    {this.buildSaleTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Product Category</label>
                                <select name="categoryid" onChange={this.onChangeHandler} className="form-control" required>
                                    <option value="0">Choose a Category</option>
                                    {this.buildCategoryTypeOptions()}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Price</label>
                                <input type="number" onChange={this.onChangeHandler} className="form-control" name="price" autoComplete="off" required />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label>City</label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="city" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>State</label>
                                <select onChange={this.onChangeHandler} className="form-control" name="location" required>
                                    <option value="0">Choose a State</option>
                                    {this.buildStateOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Address</label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="address" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <label>Image</label>
                                <input type="file" onChange={(e) => this.onChangeHandlerImage(e)} className="form-control" name="image" required />
                            </div>
                        </div>
                        <button type="submit" style={loginButton} className="btn btn-block mt-3">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default AddProduct;

const loginButton = {
    backgroundColor: '#ffa64d'
}

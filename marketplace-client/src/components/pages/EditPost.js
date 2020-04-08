import React from 'react';
import axios from 'axios';

var loadjs = require('loadjs');
var email = "";

class EditPost extends React.Component {
    componentDidMount() {
        loadjs("main.js");
        if(localStorage.getItem('token') !== null) {
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

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            description: '',
            saletype: '',
            categoryid: '',
            price: '',
            city: '',
            location: '',
            address: '',
            image: ''
        }
    }

    onChangeHandlerImage = e => {
        e.preventDefault();
    }

    onChangeHandler = e => {
        e.preventDefault();
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.editPost();
    }

    editPost() {
        axios({
            method: 'POST',
            url: 'posts/updatePost',
            data: {
                _id: this._id.value
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className="container pb-3">
                    <h1 className='text-center pt-3'>Edit Post</h1>
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form" onSubmit={this.onSubmitHandler}>
                        <input type="hidden" name="_id" ref={(input) => { this._id = input }} value="5e76bff69c983c3d6815b0c4" />
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Product Name</label>
                                <input type="text" className="form-control" onChange={this.onChangeHandler} name="name" required autoComplete="off" />
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Description</label>
                                <textarea name="description" rows="3" onChange={this.onChangeHandler} className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Sale Type</label>
                                <select className="form-control" name="saletype" onChange={this.onChangeHandler} required>
                                    <option value="0">Choose a Sale Type</option>
                                    {this.buildSaleTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Product Category</label>
                                <select name="categoryid" className="form-control" onChange={this.onChangeHandler} required>
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
                                <label>City</label>
                                <input type="text" onChange={this.onChangeHandler} className="form-control" name="city" required />
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>State</label>
                                <select onChange={this.onChangeHandler} className="form-control" name="location" required>
                                    <option value="0">Choose a State</option>
                                    {this.buildStateOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
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
        );
    }
}

const loginButton = {
    backgroundColor: '#ffa64d'
}

export default EditPost;
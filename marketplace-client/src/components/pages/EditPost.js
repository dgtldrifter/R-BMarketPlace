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
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className='text-center pt-3'>Edit Post</h1>
                    <form method="post" encType="multipart/form-data" className="form-horizontal mt-4 contact-form">
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Product Name</label>
                                <input type="text" className="form-control" name="name" required autoComplete="off" />
                            </div>
                            <div className="col-12 col-sm-6 mt-3">
                                <label>Description</label>
                                <textarea name="description" rows="3" className="form-control" required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Sale Type</label>
                                <select className="form-control" name="saletype" required>
                                    <option value="0">Choose a Sale Type</option>
                                    {this.buildSaleTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Product Category</label>
                                <select name="categoryid" className="form-control" required>
                                    <option value="0">Choose a Category</option>
                                    {this.buildCategoryTypeOptions()}
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 mt-3">
                                <label>Price</label>
                                <input type="number" className="form-control" name="price" autoComplete="off" required />
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
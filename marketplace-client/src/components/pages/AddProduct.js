import React from 'react';
import axios from 'axios';

var loadjs = require('loadjs');

class AddProduct extends React.Component {
    componentDidMount() {
        loadjs('main.js');
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            categoryid: '',
            price: '',
            date: '',
            location: '',
            ownerID: '',
            image: ''
        }
    }

    submitHandler = e => {
        
    }

    async addProduct() {
        axios({
            method: 'POST',
            url: '/product',
            data: {
                name:       this.state.name,
                categoryid: this.state.categoryid,
                price:      this.state.price,
                date:       this.state.date,
                location:   this.state.location,
                ownerID:    this.state.ownerID,
                image:      this.state.image
            }
        }).then((response) => {
            if(response.status === 200) {

            }
        }, error => {

        });
    }
    
    render() {
        return (
            <div class="container">
                <form method="post" className="form-horizontal mt-4" onSubmit={this.submitHandler}>
                    <input type="hidden" className="form-control" name="date" />
                    <input type="hidden" className="form-control" name="ownerID" />
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" required autoComplete="off"/>
                        </div> 
                        <div className="col-12 col-sm-6">
                            <label>Product Category</label>
                            <select name="categoryid" className="form-control" required>
                                <option value="0">Choose a Category</option>
                                <option value="1">Real Estate</option>
                                <option value="2">Furniture</option>
                                <option value="3">Cooking</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div className="col-12 col-sm-6">
                            <label>Price</label>
                            <input type="number" className="form-control" name="price" autoComplete="off" required/>
                        </div>
                        <div class="col-12 col-sm-6">
                            <label>Description</label>
                            <textarea name="_description" className="form-control"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 col-sm-6">
                            <label>Location</label>
                            <input type="text" className="form-control" name="location" />
                        </div>
                        <div class="col-12 col-sm-6">
                            <label>Image</label>
                            <input type="file" className="form-control" name="image" />
                        </div>
                    </div>
                    <button type="submit" style={loginButton} className="btn btn-block mt-3">Add Product</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;

const loginButton = {
    backgroundColor: '#66ccff'
}
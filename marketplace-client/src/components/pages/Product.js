import React from 'react';
import axios from 'axios';
var loadjs = require('loadjs');

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productid,
      error: null,
      isLoaded: false,
      product: [],
      name: '',
      description: '',
      categoryid: '',
      price: '',
      city: '',
      location: '',
      address: '',
      saletype: '',
      image: ''
    };
  } 

  axiosRequest(){

    axios({
      method: 'POST',
      url: '../posts/getOne',
      headers: {
          "Content-Type": "application/json",
          ObjectID: this.props.productid
      }
    }).then((response) => {
        if(response.status === 200) {
            this.setState({
                isLoaded: true,
                name:        response.data.name,
                description: response.data.description,
                saletype:    response.data.saletype,
                categoryid:  response.data.categoryid,
                price:       response.data.price,
                city:        response.data.city,
                location:    response.data.location,
                address:     response.data.address,
                image:       response.data.image
            });
        }
    }).catch((err) => {
        //Wrong input by user, route home
        window.location.href = '/';
        console.log(err);
    });

  }

  componentDidMount() {
    loadjs('../../main.js');

    this.axiosRequest();
    
  }

  componentDidUpdate() {
    
  }

  

  render() {
    const { error, isLoaded } = this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading ... </div>;
    } else {

      

      return (
        <div style={{paddingBottom: "100px", paddingTop: "100px", backgroundColor: "#fcfcfc"}}>
          
          
          <div className="row">
            <div className="column" style={{ backgroundColor: "#eee"}}>
              <div style={{padding: "50px"}}>
                  <img src={this.state.image} className="img-fluid" alt={this.state.name} />
              </div>
            </div>
            <div className="column" style={{ backgroundColor: "#eee"}}>
            <div style={{padding: "50px 50px 50px 100px"}}>
              
              
              <div style={{ fontSize: "60px", paddingBottom: "50px"}}>{this.state.name}   -   ${this.state.price}.00</div>
              <div className="productHeading">Description: <p>{this.state.description}</p></div>
              <div className="productHeading">Address: <p>{this.state.address}</p></div>
              <div className="productHeading">State: <p>{this.state.location}</p></div>
              <div className="productHeading">City: <p>{this.state.city}</p></div>
              <div className="productHeading">Product Type: <p>{this.state.saletype}</p></div>
              
              
              
            </div>
            </div>
          </div>

          
          
          
          
        </div>        
      );





    }
  }
}

export default Product;
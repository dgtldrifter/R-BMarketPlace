import React from 'react';
import axios from 'axios';

class AddProduct extends React.Component {
    async addProduct() {

    }
    
    render() {
        return (
            <form method="post">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <input type="text" />
                    </div> 
                </div>
            </form>
        );
    }
}

export default AddProduct;
import React from 'react';
import { connect } from 'react-redux';
import ProductAction from './redux/product/actions';

const dispatcher = ProductAction.dispatcher;

class Product extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.Product.products.map((product, index) => product && (
                        <div>
                            {product.id} <br />
                            {product.name} <br />
                            {product.price} <br />
                            {/* {student.major} <br />
                            {student.gpa} <br /> */}
                            <button id={index} onClick={this.handleUpdate}>update</button>
                            <button id={index} onClick={this.handleDelete}>delete</button>
                            <br />
                            <br />
                        </div>
                    ))
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchProduct();
    }

    handleUpdate = (e) => {
        const product = this.props.Input;
        this.props.updateProduct(e.target.id, product);
    }

    handleDelete = (e) => {
        this.props.deleteProduct(e.target.id)
    }

}

export default connect(state => state, dispatcher)(Product);

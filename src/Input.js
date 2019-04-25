import React from 'react';
import { connect } from 'react-redux';
import InputAction from './redux/input/actions';
import ProductAction from './redux/product/actions';

const inputDispatch = InputAction.dispatcher;
const productDispatch = ProductAction.dispatcher;

class Input extends React.Component {

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} name='id' placeholder='id'/> <br/>
        <input type='text' onChange={this.handleChange} name='name' placeholder='name'/> <br/>
        <input type='text' onChange={this.handleChange} name='price' placeholder='price'/> <br/>
        <br/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }

  handleChange = (e) => {
      const {name, value} = e.target;
      switch (name) {
          case 'id': this.props.updateId(value); break;
          case 'name': this.props.updateName(value); break;
          case 'price': this.props.updatePrice(value); break;
      }
  }

  handleAdd = () => {
      const {
          id,
          name,
          price
      } = this.props.Input;
      this.props.addProduct({
        id,
        name,
        price
      })
  }

}

export default connect(state => state, {
    ...inputDispatch,
    ...productDispatch
})(Input);

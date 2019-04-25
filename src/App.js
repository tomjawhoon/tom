import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Product from './Product';
import Input from './Input'

class App extends React.Component {
  state = {
    products: []
  }

  render() {
    return (
      <Provider store={store}>
        <Input/>
        <Product/>
      </Provider>
    )
  }

}

export default App;

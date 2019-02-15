import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state ={
        inventory: [],
        img: '',
        name: '',
        price: ''
    }
  }

  handleImg(val) {
    this.setState({
      img: val
    });
  }
  handleName(val) {
    this.setState({
      name: val
    });
  }
  handlePrice(val) {
    this.setState({
      price: val
    });
  }
    componentDidMount() {
      axios.get('/api/').then(res => {
        console.log(res.data);
        this.setState({
          messages: res.data
        });
      });
    }

   cancelAddtoInv(){
this.setState({
  img: '',
  name: '',
  price: ''
})
   }








  

  render() {
    return (
      <div className="App">
      <input type="text"
          value={this.state.img}
          onChange={e => this.handleImg(e.target.value)}/>
      <input type="text"
          value={this.state.name}
          onChange={e => this.handleName(e.target.value)}/>
      <input type="text"
          value={this.state.price}
          onChange={e => this.handlePrice(e.target.value)}/>

      <button onClick={() => this.cancelAddtoInv()}>Cancel</button>
      <button>Add to inventory</button>

       <Dashboard/>
       <Form/>
       <Header/>
       <Product/>

      </div>
    );
  };

}
export default App;


import React, { Component } from 'react';
import Form from '../Form/Form';
import axios from 'axios';
import Product from './Product/Product'


class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventories:[],
      input: '',
      img: '',
      name: '',
      price: ''
    
    };
  }


  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      console.log(res.data);
      this.setState({
        inventories: res.data
      });
    });
  }

  postInventory() {
    const { input } = this.state;
    axios.post('/api/inventory', { inventory: input }).then(res => {
      this.setState({
        inventories: res.data,
        input: '',
        name: '',
        price:'',
        img: ''
      });
    });
  }

  deleteInventory = id => {
    axios.delete(`/api/inventory/${id}`).then(res => {
      this.setState({
        inventories: res.data
      });
    });
  };

  onEdit = inventory => {
    console.log('edit is working');
    this.setState({
      input: inventory
    });
  };


  updateInventory = id => {
    const { input } = this.state;
    console.log(id);
    axios.put(`/api/inventory/${id}`, { inventory: input }).then(res => {
      this.setState({
        inventory: res.data,
        input: '',
      });
    });
  };
  cancelAddtoInv(){
      this.setState({
        img: '',
        name: '',
        price: ''
      })
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

  render() {
    const mappedInventory = this.state.inventories.map(inventory => {
      return (
        <Form
          key={inventory.id}
          inventory={inventory}
          deleteInventory={this.deleteInventory}
          updateInventory={this.updateInventory}
          onEdit ={this.onEdit}
        />
      );
    });
    return (
      <div className="App">
       
        <input type="text"
          placeholder='img'
            value={this.state.img}
            onChange={e => this.handleImg(e.target.value)}/>
        <input type="text"
          placeholder='name'
            value={this.state.name}
            onChange={e => this.handleName(e.target.value)}/>
        <input type="text"
          placeholder='price'
            value={this.state.price}
            onChange={e => this.handlePrice(e.target.value)}/>
  
        <button onClick={() => this.cancelAddtoInv()}>Cancel</button>
        

         <Product/>
        <button onClick={() => this.postInventory()}>Add to Inventory</button>
       {mappedInventory}
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  onEdit(inventory) {
    this.props.onEdit(inventory);
    this.setState({
      editing: true
    });
  }

  updateInventory(id) {
    this.props.updateInventory(id);
    this.setState({
      editing: false
    });
  }

  render() {
    const { inventory, deleteInventory } = this.props;
    return (
      <div>
        <Link to={`/inventory/${inventory.inventory_id}`}>
         
        </Link>
        <div>
          <button onClick={() => deleteInventory(inventory.inventory_id)}>
            Delete
          </button>
          {this.state.editing ? (
            <button onClick={() => this.updateInventory(inventory.inventory_id)}>
              Save
            </button>
          ) : (
            <button onClick={() => this.onEdit(inventory.inventory)}>Edit</button>
          )}
        </div>
      </div>
    );
  }
}

export default Form;

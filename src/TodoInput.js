import React, { Component } from "react";

class Todoitem extends Component {
 
  render() {
    const {editItem, item, handleChange, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}>
       <input value={item} onChange={handleChange} type="text" />
       <button> { editItem ? ' Edit Item':' Add Item'}</button>
      </form>
    );
  }
}

export default Todoitem;

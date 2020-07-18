import React, { Component } from "react";
import Todoitem from './TodoItem'

class Todolist extends Component {
  render() {
    const {clearHandle, items, deleteHandle, handleEdit} = this.props
    return (
      <div>
      <div> 
        {
          items.map(item =>  <Todoitem id={item.id} key={item.id} handleEdit={handleEdit} deleteHandle={()=> deleteHandle(item.id)} title={item.title} />)
        }
       </div>
       <button onClick={clearHandle}>Clear Todo</button>
      </div>
    );
  }
}

export default Todolist;

import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    const {id,title, deleteHandle, handleEdit} = this.props
    return (
      <React.Fragment>
       <div><span>{title}</span>
       <span><button onClick={()=> handleEdit(id)}>Edit</button></span>
       <span><button onClick={deleteHandle}>Delete</button></span>
       </div>
      </React.Fragment>
    );
  }
}

export default Todoitem;

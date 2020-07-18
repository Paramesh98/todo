import React, {Component} from "react";
import "./styles.css";
import Todolist from './TodoList';
import Todoinput from './TodoInput'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[],
      id:1,
      item:'',
      editItem:false
    }
}

handleChange = e =>{

  this.setState({item:e.target.value})
}

handleSubmit = (e) =>{
  e.preventDefault()
  const newItem = {
    id:Math.random(),
    title:this.state.item
  }
  console.log(newItem)
  const updatedItem = [...this.state.items, newItem]
  this.setState({items:updatedItem, item:'', id:this.state.id+1, editItem:false })

}

clearHandle = () =>{
  this.setState({items:[]})
}

deleteHandle = (id) =>{
const filteredItems = this.state.items.filter(item=>{
 return( item.id !== id)
})

this.setState({items:filteredItems})
}

handleEdit = (id) =>{
  const filteredItems = this.state.items.filter(item=>{
    return( item.id !== id)
   })
   const editedItem = this.state.items.find(item => id === item.id)
   console.log(editedItem)
   this.setState({items:filteredItems, item:editedItem.title, id:id, editItem:true})
   }

 render(){
  return (
    <div className="App">
      <Todoinput editItem={this.state.editItem} handleSubmit={this.handleSubmit} item={this.state.item} handleChange={this.handleChange}/>
      <Todolist  handleEdit={this.handleEdit} deleteHandle={this.deleteHandle} items={this.state.items} clearHandle={this.clearHandle} />
    </div>
  );
 }
}

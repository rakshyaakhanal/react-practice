import React from "react";
import Todoitem from "./Todoitem.jsx";
import "./todo.css";
import Tododata from "./Tododata.jsx";


// function Todo() {
//     const todoItems = tododata.map(item => <Todoitem key={item.id} item={item} />);
//     return (
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     );
// }

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: Tododata
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(pdata => {
            const udata = pdata.todos.map(todo => {
                if(todo.id ===id) {
                    todo.completed = !Todo.completed
                }
                return todo
            })
            return {
                todos: udata                                         
            }
        })
    }


    render() {
        const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default Todo;
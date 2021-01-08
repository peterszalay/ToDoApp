import React, {Component, createContext} from 'react';

export const ToDoContext = createContext();

class ToDoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{task: 'do something'}],
        };
    }

    //create
    creaTodo(){

    }
    //read
    readTodo(){

    }
    //update
    updateTodo(){

    }
    //delete
    deleteTodo(){

    }

    render() {
        return (
            <ToDoContext.Provider value={{
                ...this.state,
                createTodo: this.creaTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this),
            }}>
                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default ToDoContextProvider;
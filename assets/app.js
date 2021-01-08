import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToDoTable from "./components/ToDoTable";
import ToDoContextProvider from "./contexts/ToDoContext";

class App extends Component {
    render() {
        return (
            <ToDoContextProvider>
                <ToDoTable>
                </ToDoTable>
            </ToDoContextProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

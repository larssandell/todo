import "./App.scss";
import todolist from "./img/todolist.png";
import ToDoList from "./components/to_do_list/ToDoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img className="Nav-logo" src={todolist} alt="firm logo" />
            </header>
            <body className="App-body">
                <ToDoList />
            </body>
            <footer className="App-footer">@ME</footer>
        </div>
    );
}

export default App;

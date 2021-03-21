import TodosHandler from "./components/TodosHandler";
import Timer from "./components/Timer";
import './App.css';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List </h1>
      <Timer />
      <TodosHandler />
    </div>
  );
}

export default App;

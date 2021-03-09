import GetTodos from "./components/GetTodos";
import Timer from "./components/Timer";
import './App.css';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List </h1>
      <Timer />
      <GetTodos />
    </div>
  );
}

export default App;

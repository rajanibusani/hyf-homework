import { useState } from "react";

const TodoItem = ({ id, description, onDelete }) => {
    const [status, setStatus] = useState(false);
    return (

        <div className="todo">
            <input type="checkbox" className="checkbox" value={id} onChange={(e => setStatus(e.target.checked))}></input>
            <span className={`texts ${status ? "checkedTodo" : ""}`}>{description}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

const Todos = ({ todoArray, onDelete }) => {
    return (
        <ul>
            {todoArray.map((todo, index) => {
                return <li key={todo.id}>
                    <TodoItem id={todo.id} description={todo.description} onDelete={onDelete} />
                </li>
            })}
        </ul>
    )
}

export default Todos
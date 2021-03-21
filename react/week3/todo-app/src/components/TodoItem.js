import { useState } from "react";
import PropTypes from 'prop-types';
const TodoItem = ({ id, description, deadline, deleteTodo, editTodo }) => {
    const [checked, setChecked] = useState(false);
    const [display, setDisplay] = useState(false);
    const [newDescription, setNewdescription] = useState(description);

    const onClick = () => {
        setDisplay(!display)
        return editTodo(id, newDescription)

    }

    return (
        <div className="todo">
            <div className="todo-text">
                <input type="checkbox" value={checked} onChange={(e) => setChecked(!checked)}></input>
                {display && <input type="text" name="description" value={newDescription} onChange={(e) => setNewdescription(e.target.value)}></input>}
                {!display && <h3 className={`${checked ? "checkedTodo" : ""}`}> {description} | {deadline}</h3>}
            </div>
            <div>
                <button onClick={() => deleteTodo(id)}>Delete</button>
                <button onClick={onClick}>{!display ? "Edit" : "Update"} </button>
            </div>
        </div>

    )
}

TodoItem.propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    deadline: PropTypes.string,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func
};


export default TodoItem;

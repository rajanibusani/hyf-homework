import { useState } from "react";

const AddTodo = ({ onAdd }) => {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(!visible);
        onAdd(value);
        setValue("")
    }
    return (
        <div>
            {visible && <input type="text" className="input-text" placeholder="Enter description" onChange={(e => setValue(e.target.value))} ></input>}
            <button onClick={onClick}>{visible ? "Submit" : "Add"}</button>
        </div>
    )
}
export default AddTodo;
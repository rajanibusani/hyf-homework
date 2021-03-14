import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"

const TodosHandler = () => {
    const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

    const [todoData, setTododata] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let mounted = true;
        fetch(API_URL)
            .then(res => res.json())
            .then(todoArray => {
                if (mounted) {
                    setIsLoading(false)
                    return setTododata(todoArray)
                }
            })
        return function cleanup() {
            mounted = false;
        }
    }, [])

    //adding todo
    const addTodo = (description, deadline) => {
        if (description && deadline) {
            const id = Date.now() + Math.floor(Math.random() * (10));
            const newTodo = { id, description, deadline };
            return setTododata([...todoData, newTodo])
        }
    }
    //deleting Todo
    const deleteTodo = (id) => {
        const deleteTodoItem = todoData.filter(todo => todo.id !== id);
        setTododata(deleteTodoItem);
    }
    //Editing Todo
    const editTodo = (id, description) => {
        if (description) {
            const editTodos = todoData.map(todo => {
                if (todo.id === id) {
                    todo.description = description;
                } return todo
            })
            setTododata(editTodos)
        }
    }

    return <>
        {!isLoading ?
            <div>
                <AddTodo addTodo={addTodo} />
                {todoData.length ?
                    <TodoList todoarray={todoData} deleteTodo={deleteTodo} editTodo={editTodo} />
                    : <h2>No Todos in List</h2>
                }
            </div>
            : <h2>Loading....</h2>}
    </>
}

export default TodosHandler;
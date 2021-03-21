import TodoItem from "./TodoItem";
import Border from "./border";
const TodoList = ({ todoarray, deleteTodo, editTodo }) => {

    return (
        <div>
            {todoarray.map(todo => {
                return <Border key={todo.id}>
                    <TodoItem id={todo.id} description={todo.description} deadline={todo.deadline} deleteTodo={deleteTodo} editTodo={editTodo} />
                </Border>
            })}
        </div>
    )
}
export default TodoList;
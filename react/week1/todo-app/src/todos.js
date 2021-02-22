const todoArray = [
    {
        id: 1,
        task: "Write grocery list",
        deadline: "Thu Feb 25 2021"
    },
    {
        id: 2,
        task: "Buy a gift for a firend",
        deadline: "Fri Feb 26 2021"
    },
    {
        id: 3,
        task: "Book Dr appointment",
        deadline: "Mon Mar 01 2021"
    }
]

const Todoitems = ({ task, deadline }) => {
    return (
        <>
            {task}, {deadline}
        </>
    )
}

const RenderTodos = ({ todos }) => {

    return (
        <ol>
            {
                todos.map(todo => {
                    return (
                        <li  key={todo.id}>
                            <Todoitems task={todo.task} deadline={todo.deadline} />
                        </li>
                    )
                })}

        </ol>
    )
}

const Todolist = () => {
    return (
        <div>
            <h2>Todo List</h2>
            <RenderTodos todos={todoArray} />
        </div>
    )
}

export default Todolist
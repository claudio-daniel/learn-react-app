
import { useTodo } from "../hook/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoReducer = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

    return (
        <>
            <h1>Todo APP: {todosCount} <span>pendientes: {pendingTodosCount}</span></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>
        </>
    )
}
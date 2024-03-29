const initialState = [
    {
        id: 1,
        todo: 'Recolertar la piedra de Alma',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 1,
    todo: 'Recolertar la piedra del Poder',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

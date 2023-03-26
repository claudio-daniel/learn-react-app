import { useForm } from "../hook/useForm"

const initialForm = {
    description: ''
}
export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInpuntChange, onResetForm } = useForm(initialForm)

    const onFormSubmit = (event) => {
        event.preventDefault()

        if (description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInpuntChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}

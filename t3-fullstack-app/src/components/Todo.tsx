import type { Todo } from "~/server/types";

type TodoProps = {
    todo: Todo
} 

const Todo = ({todo}: TodoProps) => {

    const { id, text, done } = todo

    return(
        <>
             {text}
        </>
    )
}

export default Todo;
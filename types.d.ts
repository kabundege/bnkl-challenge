export interface Todo {
    id: string,
    content:string,
    isCompleted: boolean,
    background: background,
}

export interface ContextProps{
    todos: Todo[],
    handleTodos: handleTodos
}

export type background = '#86DA83' | '#8F83DA'

export type  handleTodos = (todos:Todo[]) => void
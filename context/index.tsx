import React , { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { ContextProps, handleTodos, Todo } from '../types';
import { generateId } from '../Utils';


const dummyTodos:Todo[] = [
    {
        id: generateId(),
        content:'Submit final paper online',
        background:'#8F83DA',
        isCompleted: false,
    },{
        id: generateId(),
        content:'Review proposed budget',
        background:'#86DA83',
        isCompleted: false
    },{
        id: generateId(),
        content:'Email Olayide about walkthroughs',
        background:'#86DA83',
        isCompleted: true
    },{
        id: generateId(),
        content:'Write on Blog: Ambition & Patience',
        background:'#8F83DA',
        isCompleted: true
    },{
        id: generateId(),
        content:'Submit final paper online',
        background:'#8F83DA',
        isCompleted: false,
    },{
        id: generateId(),
        content:'Review proposed budget',
        background:'#86DA83',
        isCompleted: false
    },{
        id: generateId(),
        content:'Email Olayide about walkthroughs',
        background:'#86DA83',
        isCompleted: true
    },{
        id: generateId(),
        content:'Write on Blog: Ambition & Patience',
        background:'#8F83DA',
        isCompleted: true
    },{
        id: generateId(),
        content:'Submit final paper online',
        background:'#8F83DA',
        isCompleted: false,
    },{
        id: generateId(),
        content:'Review proposed budget',
        background:'#86DA83',
        isCompleted: false
    },{
        id: generateId(),
        content:'Email Olayide about walkthroughs',
        background:'#86DA83',
        isCompleted: true
    },{
        id: generateId(),
        content:'Write on Blog: Ambition & Patience',
        background:'#8F83DA',
        isCompleted: true
    }
]

const initialState:ContextProps = {
    todos: dummyTodos,
    handleTodos: () => {}
}

const StoreContext = createContext<ContextProps>(initialState);

const StoreProvider:FC<{ children:ReactNode }> = ({ children }) => {
    const [ todos,setTodos ] = useState<Todo[]>([]);

    useEffect(()=>{
        const storedTodos = localStorage.getItem('todos')
        if(storedTodos){
            // if there's some stored todos
            setTodos(
                JSON.parse(storedTodos)
            )
        }
    },[])

    const handleTodos: handleTodos = (todos) => {
        setTodos(todos);
        /**
         * @format
         * Syncing the changes with localstorage 
         *  */ 
        localStorage.setItem('todos',JSON.stringify(todos))
    }

    return(
        <StoreContext.Provider 
                value = {{
                    todos,
                    handleTodos,
                }}
            >
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext,StoreProvider }

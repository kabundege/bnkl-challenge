import React, { FC } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Todo } from '../../types'
import Button from '../Button'
import CloseBtn from '../CloseBtn'
import ToggleBtn from '../ToggleBtn'
import styles from './Todo.module.css'


interface Props { 
    todo:Todo
    todoToggleHandler: (id:string) => void
    todoDeleteHandler: (id:string) => void
}

const Todo:FC<Props> = ({ todo,todoToggleHandler,todoDeleteHandler }) => (
    <div className={styles.todo}>
        <ToggleBtn 
            onClick={() => todoToggleHandler(todo.id)} 
            isCompleted={todo.isCompleted} 
        />
        <p onClick={() => todoToggleHandler(todo.id)} >{todo.content}</p>
        <Button background={todo.background} />
        <CloseBtn onClick={() => todoDeleteHandler(todo.id)} >
            <AiFillDelete className={styles.icon}/>
        </CloseBtn>
    </div>
  )


export default Todo

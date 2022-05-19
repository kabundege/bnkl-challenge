import type { NextPage } from 'next'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../components/Button'
import CloseBtn from '../components/CloseBtn'
import Head from '../components/Header'
import ToggleBtn from '../components/ToggleBtn'
import { StoreContext } from '../context'
import { background, Todo } from '../types'
import styles from '../styles/Home.module.css'
import { dateHelper, generateId } from '../Utils'
import TodoComponent from '../components/Todo'


const Home: NextPage = () => {
  const { todos,handleTodos } = useContext(StoreContext)
  const [ filter,setFilter ] = useState<background | ''>()
  const [ data,setData ] = useState<Todo[]>([])
  const [ todo,setTodo ] = useState<string>('')
  const date = useRef(new Date()).current;

  useEffect(()=>{
    if(filter){
      const newData = todos.filter( one => one.background === filter)
      setData(newData)
    }else{
      setData(todos)
    }
  },[filter,todos])

  const todoToggleHandler = (id:string) => {
    const newTodos = todos.map( one => {
      if(one.id === id){
        return { ...one,isCompleted: !one.isCompleted }
      }else{
        return one
      }
    })
    // Create a new array from the existsing array of todos
    // and update a todo with the provided Id
    handleTodos(newTodos)
  }

  const todoDeleteHandler = (id:String) => {    
    if(window.confirm('Delete This Todo ,\nAre You Sure ?')){
      const newTodos = todos.filter( one => one.id !== id)
      // Filters all but the provided id #todo and update the context data
      handleTodos(newTodos)
    }
  }

  const todoCreationhandler = (background:background) => {
    const newTodo:Todo = {
      background,
      content:todo,
      id: generateId(),
      isCompleted:false,
    }

    handleTodos([ newTodo,...todos ])
    setTodo('')
  }

  const Header = (
    <header>
      <span>Today,</span>
      <span>
        {dateHelper(date,{ weekday:'short' })}
      </span>
      <span>
        {dateHelper(date,{ month:'short' })}
      </span>
      <span>
        {date.getMonth() + 1 }
      </span>
      <span>
        {date.getFullYear()}
      </span>
    </header>
  )

  const Menu = (
    <nav>
      <p>
        {
          data.length ?
            !filter ?
              `Showing all ${ data.length } tasks`:
              `Filtering and showing ${ data.length } tasks`:
            `No Tasks Yet`
        }
      </p>
      <div>
        <Button 
          onClick={() => setFilter('#86DA83')} 
          background='#86DA83' 
        />
        <span className={styles.spacer} /> {/** For Spacing purpose */}
        <Button 
          onClick={() => setFilter('#8F83DA')} 
          background='#8F83DA' 
          />
        {
          filter &&
          <>
            <span className={styles.spacer} /> {/** For Spacing purpose */}
            <CloseBtn onClick={() => setFilter('')}  />
          </>
        }
      </div>
    </nav>
  )

  const Todos = (
    <div className={styles.todos}>
      {
        data ?
        data.map(one => {
          return(
            <div key={one.id}>
              <TodoComponent 
                todo={one}
                todoDeleteHandler={todoDeleteHandler}
                todoToggleHandler={todoToggleHandler}
              />
            </div>
          )
        }) : null
      }
    </div>
  )

  const Input = (
    <div className={styles.InputField}>
      <AiOutlinePlus className={styles.icon} />
      <input
        value={todo}
        placeholder='Add a task' 
        onChange={ev => setTodo(ev.target.value) }
        />
      <div>
        <Button 
          onClick={() => todoCreationhandler('#86DA83')} 
          background='#86DA83' 
        />
        <span className={styles.spacer} /> {/** For Spacing purpose */}
        <Button 
          onClick={() => todoCreationhandler('#8F83DA')} 
          background='#8F83DA' 
          />
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <Head/>
      <div className={styles.parent}>
        {Header}
        {Menu}
        {Todos}
        {Input}
      </div>
    </div>
  )
}

export default Home

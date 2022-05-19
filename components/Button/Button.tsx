import React, { FC } from 'react'
import { background } from '../../types'
import styles from './Button.module.css'

interface Props {
    onClick?:() => void,
    background: background
  }
  
const Button:FC<Props> = ({ background,onClick }) => (
    <button 
        className={styles.btn} 
        style={{ background }}
        onClick={onClick}
    />
)

export default Button
  
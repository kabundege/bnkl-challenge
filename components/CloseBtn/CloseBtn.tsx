import React, { FC } from 'react'
import styles from './CloseBtn.module.css'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
    onClick: () => void
}

const  CloseBtn:FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
        <AiOutlineClose className={styles.icon}/>
    </button>
  )
}

export default CloseBtn

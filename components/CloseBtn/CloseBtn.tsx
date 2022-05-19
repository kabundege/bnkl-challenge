import React, { FC, ReactNode } from 'react'
import styles from './CloseBtn.module.css'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
    onClick: () => void,
    children: ReactNode
}

const  CloseBtn:FC<Props> = ({ onClick,children }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  )
}

export default CloseBtn

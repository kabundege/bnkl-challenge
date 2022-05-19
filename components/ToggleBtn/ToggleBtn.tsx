import React, { FC } from 'react'
import styles from './ToggleBtn.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'

interface Props {
    isCompleted: boolean,
    onClick: () => void
}

const ToggleBtn:FC<Props> = ({ isCompleted,onClick }) => (
    isCompleted ?
        (
            <AiFillCheckCircle onClick={onClick} className={styles.icon} />
        ):(
            <div className={styles.btn} onClick={onClick} />
        )
)

export default ToggleBtn

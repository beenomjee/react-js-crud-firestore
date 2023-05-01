import React, { useEffect } from 'react'
import styles from './Modal.module.css'
import { useRef } from 'react';
const Modal = ({ inputData, handler, isModalOpen, setIsModalOpen, updateHandler, isUpdate, createHandler, }) => {
    const nameInput = useRef(null);
    useEffect(() => {
        if (isModalOpen) {
            nameInput.current.focus();
        }
    }, [isModalOpen]);
    return (
        <>
            <div onClick={() => setIsModalOpen(false)} className={`${styles.bgWrapper} ${(isModalOpen ? styles.open : '')}`}></div>
            <div className={`${styles.container} ${(isModalOpen ? styles.open : '')}`}>
                <h2>{isUpdate ? 'Edit User' : 'Add New User'}</h2>
                <div className={styles.row}>
                    <label htmlFor="name">Name</label>
                    <input ref={nameInput} id="name" type="text" placeholder='Name' onChange={handler} value={inputData.name} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder='Email' onChange={handler} value={inputData.email} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="age">Age</label>
                    <input id='age' type="number" placeholder='Age' onChange={handler} value={inputData.age} />
                </div>
                <button onClick={() => isUpdate ? updateHandler() : createHandler()}>{isUpdate ? 'Edit User' : 'Save User'}</button>
            </div>
        </>
    )
}

export default Modal
import React from 'react'
import { MdDelete, MdEdit, MdAdd } from 'react-icons/md'
import styles from './Table.module.css'
const Table = ({ setIsModalOpen, setInputData, users, setUpdateId, setIsUpdate, deleteHandler }) => {
    const editHandler = (id) => {
        setUpdateId(id)
        setIsUpdate(true)
        let user = users.find(user => user.id === id);
        setInputData({ name: user.name, email: user.email, age: user.age });
        setIsModalOpen(true)
    }
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>Users</h1>
                <button onClick={() => { setIsModalOpen(true); setInputData({ name: '', age: '', email: '' }) }}><span className={styles.icon}><MdAdd /></span><span className={styles.text}>Add User</span></button>
            </div>
            <div className={styles.wrapper}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ?
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td><button onClick={() => editHandler(user.id)}><MdEdit /></button><button onClick={() => deleteHandler(user.id)}><MdDelete /></button></td>
                                    </tr>
                                ))
                                : <tr><td colSpan="5" className={styles.error}>No User Found!</td></tr>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
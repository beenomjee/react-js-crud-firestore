import React, { useEffect, useState } from 'react'
import { Loader, Modal, Table } from '../../components'
import { createUser, deleteUser, getUsers, updateUser } from '../../db';

const Home = () => {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        age: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [updateId, setUpdateId] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputHandler = (e) =>
        setInputData(pre => ({ ...pre, [e.target.id]: e.target.value }))

    const createHandler = async () => {
        setIsLoading(true);
        await createUser(inputData.name, inputData.email, Number(inputData.age))
        const users = await getUsers();
        setUsers(users);
        setIsLoading(false);
        setInputData({ name: '', email: '', age: '' });
        setIsModalOpen(false);
    }

    const updateHandler = async () => {
        setIsLoading(true);
        await updateUser(updateId, inputData.name, inputData.email, Number(inputData.age))
        const users = await getUsers();
        setUsers(users);
        setIsLoading(false);
        setInputData({ name: '', email: '', age: '' });
        setIsModalOpen(false);
        setIsUpdate(false);
        setUpdateId('');
    }

    const deleteHandler = async (id) => {
        setIsLoading(true);
        await deleteUser(id)
        const users = await getUsers();
        setUsers(users);
        setIsLoading(false);
    }

    useEffect(() => {
        const getUsersFunc = async () => {
            setIsLoading(true)
            const users = await getUsers();
            setUsers(users);
            setIsLoading(false)
        };
        getUsersFunc();
    }, []);

    return (
        isLoading ? <Loader /> : (
            <div>
                <Table setIsModalOpen={setIsModalOpen} setInputData={setInputData} users={users} setIsUpdate={setIsUpdate} setUpdateId={setUpdateId} deleteHandler={deleteHandler} />
                <Modal isUpdate={isUpdate} inputData={inputData} handler={inputHandler} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} createHandler={createHandler} updateHandler={updateHandler} />
            </div>
        )
    )
}

export default Home
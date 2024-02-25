/****************************************************************************
**
**
**
**
****************************************************************************/
import React, { useState, useEffect } from 'react';
import UserCard from '../components/cards/UserCard';
import { fetchRandomUsers } from '../utils/api';
import Loader from '../items/Loader';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        setLoading(true);
        fetchRandomUsers(4)
            .then(data => {
                setUsers(prevUsers => [...prevUsers, ...data.results])
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Random Users</h1>
            {loading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {users.map((user, index) => (
                        <UserCard key={index} user={user} />
                    ))}
                </div >
            )
            }
            <div className="flex justify-center my-4 ">
                <button onClick={loadUsers} className=" relative hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded">
                    Load More..
                </button>
            </div>
        </div >
    );
};

export default HomePage;

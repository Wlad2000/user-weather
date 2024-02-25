/****************************************************************************
**
**
**
**
****************************************************************************/
import React, { useState, useEffect } from 'react';
import UserCard from '../components/cards/UserCard';
import { getUserFromLocalStorage } from '../utils/api';
import { useNavigate } from "react-router-dom";

const SavedUsers = () => {
    const [savedUsers, setSavedUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const users = getUserFromLocalStorage();
        setSavedUsers(users);
    }, []);

    return (
        <div className="p-8">
            <div className='flex mb-6'>
                <h1 className="text-2xl font-semibold mr-5 ">Saved Users</h1>
                <button onClick={() => navigate("/")} className="text-l text-blue-800 p-2 bg-gray-300 rounded-2xl hover:bg-gray-400 font-semibold">Back to random users</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {savedUsers.map(user => (
                    <UserCard key={user.login.uuid} user={user} saved />
                ))}
            </div>
        </div >
    );
};

export default SavedUsers;

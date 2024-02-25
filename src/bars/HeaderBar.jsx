/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react'
import { useNavigate } from "react-router-dom";

const HeaderBar = (props) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                height: `${props.height}`,
                width: '100%',
                position: 'fixed',
                zIndex: 100
            }}
            className="border py-3 px-6  bg-gray-200"
        >
            <div className="flex justify-between">
                <div className="flex items-center  cursor-pointer hover:bg-gray-100 p-2 rounded-xl" onClick={() => navigate("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="ml-2 font-semibold text-[#1e6fb7]">User and Weather</span>
                </div>

                <div className="ml-2 flex">
                    <div onClick={() => navigate("/saved")} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Saved Users</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeaderBar
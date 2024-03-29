/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react'

const Modal = (props) => {
    if (!props.isOpen) return null;
    return (
        <div onClick={props.onClose} className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center mt-19" >
            <div
                onClick={(e) => e.stopPropagation()} className="shadow-inner relative bg-gray-400 rounded-3xl p-8"
                style={{
                    width: props.width && props.width, height: props.height && props.height
                }}
            >
                <button onClick={props.onClose} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {props.children}
            </div>
        </div >
    )
}

export default Modal
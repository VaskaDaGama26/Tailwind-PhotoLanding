import React from 'react'

const HeaderBadge = (label) => {
    return (
        <div className='hover:scale-105 duration-300 cursor-default my-6 shadow-std flex flex-row items-center py-1.5 px-4 border-1 border-slate-500 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className=" size-4.5 text-rose-500">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
            </svg>
            <p className='cursor-default user-select lg:text-xl'>{label}</p>
        </div>
    )
}

export default HeaderBadge
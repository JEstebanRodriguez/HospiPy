import React from 'react'

export const Header = () => {
    return (
        <nav className='flex flex-row box-border z-[9999] place-items-center sticky bg-transparent justify-between max-w-full p-10 px-[20%]'>
            <div>
                <h1 className='text-[3vmin] font-bold'>
                    Logo-Hospital
                </h1>
            </div>
            {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
            <button className='border-2 border-solid p-4 font-bold bg-blue-700 text-white hover:cursor-pointer hover:bg-blue-900'>Iniciar Sesion</button>
        </nav>
    )
}

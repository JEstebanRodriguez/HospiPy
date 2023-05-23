import React from 'react'
import { Button } from '../Buttons/Button'

export const Header = () => {
    return (
        <nav className='flex flex-row box-border z-[9999] place-items-center sticky bg-transparent justify-between max-w-full p-10 px-[20%]'>
            <div>
                <h1 className='text-[3vmin] font-bold'>
                    Logo-Hospital
                </h1>
            </div>
            <Button text='Iniciar Sesion' />
        </nav>
    )
}

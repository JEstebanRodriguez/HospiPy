import React from 'react'

export const Button = ({ size = 'normal', text }) => {
    const BTN__CLASS = 'rounded-md hover:cursor-pointer hover:bg-secondary font-bold text-white bg-primary' +
        (size === 'normal' ? ' px-4 py-3' : size === 'big' && ' text-lg px-8 py-6');
    return (
        <button className={BTN__CLASS}>{text}</button>
    )
}